"use client"
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState} from "react";
import { useRouter } from "next/navigation";

import FormField from "./FormField";
import Button from "./Button";
// import CustomMenu from './CustomMenu';
import { updatePost, createNewPost, fetchToken } from "@/lib/actions";
import { FormState, PostInterface, SessionInterface } from "@/common.types";

type Props = {
    type: string,
    session: SessionInterface, 
    post?: PostInterface
}

const PostForm = ({ type, session, post}: Props) => {
    const router = useRouter()

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<FormState>({
        title: post?.title || "", 
        description: post?.description || "",
        image: post?.image || "",
        website: post?.website || "",
        price: post?.price || 0,
        country: post?.country || ""
    })

    const handleStateChange = (fieldName: keyof FormState, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));

    }
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0];

        if (!file) return ;

        if (!file.type.includes('image')){
            alert('Please upload an image!');

            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;
            handleStateChange("image", result)

        };
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setSubmitting(true)

        const { token } = await fetchToken()

        try {
            if (type === "create") {
                await createNewPost(form, session?.user?.id, token)

                router.push("/")
            }
            if (type === "edit") {
                await updatePost(form, post?.id as string, token)

                router.push("/")
            }
        } catch (error) {
            alert(`failed to ${type === "create" ? "create" : "edit"} a post. Try again!`);
        } finally {
            setSubmitting(false)
        }

    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flexStart form">
                <div className="flexStart form_image-container">
                    <label htmlFor="poster" className="flexCenter form_image-label">
                        {!form.image && "choose a poster for your project"}
                    </label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        required={type === "create" ? true : false}
                        className="form_image-input"
                        onChange={(e) => handleChangeImage(e)} 
                    />
                    {form.image && (
                        <Image 
                            src={form?.image}
                            className="sm:p-10 object-contain z-20" alt="image"
                            fill
                        />
                    )}
                </div>

                <FormField
                    title="Title"
                    state={form.title}
                    placeholder="YELP CAMP "
                    setState={(value) => handleStateChange("title", value)}
                />

                <FormField
                    title="Title"
                    state={form.description}
                    placeholder="shoecase amazing camp locations "
                    isTextArea
                    setState={(value) => handleStateChange("description", value)}
                />

                <FormField
                    title="website"
                    state={form.website}
                    placeholder="Yelpcamp.com"
                    setState={(value) => handleStateChange("website", value)}
                />

                <FormField
                    title="price"
                    state={form.price}
                    placeholder="$120"
                    setState={(value) => handleStateChange("price", value)}
                />

                <FormField
                    title="Title"
                    state={form.country}
                    placeholder="YELP CAMP "
                    setState={(value) => handleStateChange("country", value)}
                />

                <div className="flexStart w-full">
                    <Button
                        title={submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                        type="submit"
                        leftIcon={submitting ? "" : "/plus.svg"}
                        submitting={submitting}
                    />
                </div>

        </form>
    )
}

export default PostForm

   