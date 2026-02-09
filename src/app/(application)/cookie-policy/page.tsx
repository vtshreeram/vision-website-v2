import Head from "@/components/shared/head";
import { Typography } from "@/components/ui/Typography";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

const CookiePolicyPage = () => {
    return (
        <main>
            <Head heading="Cookie Policy" subHeading="Usage Policy" bgImg={headBg} />

            <section className="py-16 md:py-24 global-padding-container">
                <div className="max-w-4xl mx-auto prose-body">
                    <Typography variant="Regular_H6" className="text-gray mb-8">
                        Last updated: February 2026
                    </Typography>

                    <div className="space-y-8">
                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                1. What Are Cookies
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                2. How We Use Cookies
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray mb-4">
                                We use cookies for the following purposes:
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 text-gray">
                                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
                                <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make (such as your language or region).</li>
                                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
                            </ul>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                3. Managing Cookies
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                4. Third-Party Cookies
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                5. Contact Us
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                If you have any questions about this Cookie Policy, please contact us at:<br />
                                Email: operation@visionstransport.com.my<br />
                                Phone: +60 3-5131 3898
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            <Banner />
        </main>
    );
};

export default CookiePolicyPage;
