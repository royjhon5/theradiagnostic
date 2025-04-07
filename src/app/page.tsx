import Wrapper from "@/components/global/wrapper";
import Layout from "@/components/layout";
import HeroSection from "./(sections)/HeroSections";
import AboutUsSection from "./(sections)/AboutSections";
import ServicesSection from "./(sections)/ServicesSection";
import BookAppointmentSection from "./(sections)/BookAppointmentSection";
import PricingAndPlanningSection from "./(sections)/PricingAndPlanSection";
import PricingSection from "./(sections)/Testimonials";
import ContactAndFaqs from "./(sections)/ContactAndFaqs";
import BlogAndTipsSection from "./(sections)/BlogAndTipsSection";
import Testimonials from "./(sections)/Testimonials";


export default function Home() {
  return (
    <Layout>
      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        <Wrapper>
            <HeroSection />           
        </Wrapper>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <AboutUsSection />
        </Wrapper>    
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
         <ServicesSection />
        </Wrapper>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <BookAppointmentSection />
        </Wrapper>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <PricingAndPlanningSection />
        </Wrapper>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <Testimonials />
        </Wrapper>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <ContactAndFaqs />
        </Wrapper>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <BlogAndTipsSection />
        </Wrapper>
      </section>
    </Layout>
  );
}
