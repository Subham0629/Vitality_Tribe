import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


const Blog=()=>{

    return (
        <div>
            <main className="container mt-10 mx-auto px-4 py-8">
                <section className="mt-5 w-4/5 m-auto">
                    <h2 className="text-left font-semibold mb-4 underline text-3xl">Today's Top Stories</h2>
                    <div className="gap-14">
                        <div className="flex m-auto shadow-lg rounded-lg mb-6 gap-12 p-3">
                            <img className="w-[300px] rounded-lg" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/scientific_tips_to_keep_your_produce_fresher_longer_slideshow/1800ss_getty_rf_raw_carrots.jpg?resize=484px:*&output-quality=50" alt="" />
                            <div>
                            <h1 className="text-2xl font-semibold text-left">Best Food To Fight Depression</h1>
                            <p className="text-left">Foods naturally rich in magnesium may, therefore, help a person to feel calmer. Examples include leafy greens, such as spinach and Swiss chard. Other sources include legumes, nuts, seeds, and whole grains. Foods rich in zinc such as oysters, cashews, liver, beef, and egg yolks have been linked to lowered anxiety.</p>
                                <div className="flex justify-start">    
                                <Link to={"https://www.webmd.com/depression/ss/slideshow-foods-fight-depression"}>
                                   <button className=" mb-4  mt-4 justify-start px-3 flex py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 ">Learn More
                                    </button>
                                   </Link>
                               </div>
                            </div>
                        </div>
                        <div className="flex m-auto shadow-lg rounded-lg mb-6 gap-12 p-3">
                            <img className="w-[300px] rounded-lg" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/blog_posts/depression/1800x1200_getty_rf_woman_facing_sky.jpg?resize=484px:*&output-quality=50" alt="" />
                            <div>
                            <h1 className="text-2xl font-semibold text-left">When Will the Stigma of Mental Illness End</h1>
                            <p className="text-left">The words “mental health” don't exist in people's vocabulary. Among friends and family, there is no talk of therapy, the openness of struggle, or the vulnerability of brittle emotions. People don't even acknowledge the possibility of having anxiety or depression at any point in their life, instead they blame it on their frantic energy, constant worry, sadness, nightmares, fatigue.</p>
                                <div className="flex justify-start">    
                                   <Link to={"https://blogs.webmd.com/depression/20230313/ending-the-stigma-of-mental-illness"}>
                                   <button className=" mb-4  mt-4 justify-start px-3 flex py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 ">Learn More
                                    </button>
                                   </Link>
                               </div>
                            </div>
                        </div>                    
                        <div className="flex m-auto shadow-lg rounded-lg mb-6 gap-12 p-3">
                            <img className="w-[300px] rounded-lg" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/signs_you_should_have_a_covid19_antibody_test_slideshow/1800ss_getty_rf_covid19_antibody_test.jpg?resize=484px:*&output-quality=50" alt="" />
                            <div>
                            <h1 className="text-2xl font-semibold text-left">COVID Health Emergency Ends-- What This Means</h1>
                            <p className="text-left">The federal public health emergency for COVID-19, in place in the United States for more than 3 years, ends on Thursday. The secretary of the Department of Health and Human Services first issued the emergency declaration under the Public Health Services Act, and it was renewed repeatedly – until now.</p>
                                <div className="flex justify-start">    
                                    <Link to={"https://www.webmd.com/covid/news/20230509/effects-of-the-end-of-the-covid-health-emergency"}><button className=" mb-4  mt-4 justify-start px-3 flex py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 ">Learn More
                                    </button>
                                    </Link>
                               </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-10">
                    <h2 className="text-left font-semibold text-3xl underline">Living Healthy</h2>
                    <div className="flex mt-5 gap-5">
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/wellness-mental-health.jpg?resize=484px:*&output-quality=50" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">Mental Health</h1>
                        </div>
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/Wellness_Diet_Weight.jpg?resize=484px:*&output-quality=50" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">Weight Management</h1>
                        </div>                    
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/webmd_homepage_healthy_aging_image_beach_other/464x634_webmd_homepage_healthy_aging_image_beach_other.jpg?resize=484px:*&output-quality=50" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">Healthy Aging</h1>
                        </div>
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/Wellness_Fitness_and_Excercise.jpg?resize=484px:*&output-quality=50" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">Fitness & Exercise</h1>
                        </div>
                    </div>
                </section>
                <section className="mt-10 mb-10">
                    <h2 className="text-left font-semibold text-3xl underline">Natural Remedies</h2>
                    <div className="flex mt-5 gap-5 ">
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/nourish_site_front_other/1800x1200_clean_eating_diet_other.jpg?resize=600px:*&output-quality=75" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">All About Berries</h1>
                        </div>
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/fresh_kale_other/1800x1200_fresh_kale_other.jpg?resize=600px:*&output-quality=75" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">Nutrients Your Skin Needs</h1>
                        </div>                    
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/aloe_gel_other/1800x1200_aloe_gel_other.jpg?resize=600px:*&output-quality=75" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">How to Use Aloe Vera </h1>
                        </div>
                        <div className="shadow-lg p-3 rounded-md">
                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/supplement_smarts_best_ways_to_take_vitamins_slideshow/1800ss_getty_rf_woman_taking_pill.jpg?resize=600px:*&output-quality=75" alt="" />
                            <h1 className="text-semibold text-2xl mt-2 mb-2">The Truth About Vitamins</h1>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Blog;