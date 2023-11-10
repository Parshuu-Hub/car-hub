"use client";
// "use server";
import Image from "next/image";
import { CustomButton } from ".";

export const Hero=()=>{

    const handleScroll=()=>{

    }

    return (
      
            <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <h1 className="hero__title">Book your car now — Easily!</h1>
                    <p className="hero__subtitle">Hurry Up! Get upto 60% off on your first ride.</p>
                    <CustomButton
                        title="Explore Cars"
                        containerStyles="bg-primary-blue text-white rounded-full mt-10"
                        handlClick={handleScroll}
                    />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/hero.png" alt="hero" fill className="object-contain" />
                    </div>
                        <div className="hero__image-overlay" />
                </div>
            </div>
   
    )
}