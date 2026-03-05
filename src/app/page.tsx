"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TextAbout from "@/components/sections/about/TextAbout";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Camera, Sparkles, Heart, Edit3, User, Award, Star, Users, ThumbsUp, MessageCircle, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="medium"
      background="noise"
      cardStyle="gradient-bordered"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Pixify Studio"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Gallery", id: "gallery" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Capture Your Most Precious Moments"
          description="Professional photography services in Vadodara. Specializing in weddings, pre-wedding shoots, portraits, and events. Let us tell your story through stunning visuals."
          tag="Professional Photography"
          tagIcon={Camera}
          background={{ variant: "plain" }}
          buttons={[
            { text: "Call Now: +91 70160 80009", href: "tel:+917016080009" },
            { text: "Book a Photoshoot", href: "#inquiry" },
          ]}
          carouselItems={[
            { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/bride-groom-taste-red-wedding-cake-standing-before-altar-night_8353-7092.jpg", imageAlt: "Wedding photography showcase" },
            { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/young-couple-having-walk-woods_1303-22349.jpg", imageAlt: "Pre-wedding shoot showcase" },
            { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/confident-young-model-holds-camera-spotlight-generated-by-ai_188544-27654.jpg", imageAlt: "Portrait photography showcase" },
            { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/friends-celebrating-new-years-eve_53876-46899.jpg", imageAlt: "Event photography showcase" },
            { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/wedding-couple-performing-first-dance-restaurant_8353-12297.jpg?_wi=1", imageAlt: "Wedding ceremony photography" },
            { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/man-kissing-hand-woman-sitting-sea-shore_23-2148019932.jpg", imageAlt: "Pre-wedding couple shoot" },
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFive
          title="Our Photography Services"
          description="Comprehensive photography solutions tailored to capture every special moment with professional excellence."
          tag="Services"
          tagIcon={Sparkles}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Wedding Photography",              description: "Complete wedding day coverage capturing emotions, details, and celebrations. Professional editing and fast delivery.",              icon: Heart,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/married-couple-cuddling-city_1153-3088.jpg", imageAlt: "Wedding ceremony" },
                { imageSrc: "http://img.b2bpic.net/free-photo/wedding-couple-dancing-their-first-dance_1303-10483.jpg", imageAlt: "Wedding reception" },
              ],
            },
            {
              title: "Pre-Wedding Shoots",              description: "Romantic and creative pre-wedding photography sessions at scenic locations. Perfect for creating lasting memories before the big day.",              icon: Camera,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-couple-diversity-love-moment-together_1150-9308.jpg", imageAlt: "Pre-wedding couple" },
                { imageSrc: "http://img.b2bpic.net/free-photo/newlyweds-looking-sunset-posing-hill_8353-12613.jpg", imageAlt: "Pre-wedding location shoot" },
              ],
            },
            {
              title: "Portrait Photography",              description: "Professional individual and family portraits with studio lighting and outdoor sessions. Timeless images for personal or professional use.",              icon: User,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg", imageAlt: "Individual portrait" },
                { imageSrc: "http://img.b2bpic.net/free-photo/affectionate-family_1098-15799.jpg", imageAlt: "Family portrait" },
              ],
            },
            {
              title: "Event Photography",              description: "Corporate events, birthdays, anniversaries, and celebrations captured with professional expertise. Same-day previews available.",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149333670.jpg", imageAlt: "Corporate event" },
                { imageSrc: "http://img.b2bpic.net/free-photo/people-having-fun-rooftop-party_23-2148266908.jpg", imageAlt: "Birthday celebration" },
              ],
            },
            {
              title: "Photo Editing",              description: "Professional post-processing including color correction, retouching, and creative enhancement. Premium quality in every frame.",              icon: Edit3,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/green-eyes-woman-portrait_1122-540.jpg", imageAlt: "Before editing" },
                { imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495267.jpg", imageAlt: "After editing" },
              ],
            },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Meet Your Photographer"
          tagIcon={Award}
          title="Hi, I'm Pratik Parmar. I turn moments into memories through the lens. With years of professional photography experience, I've captured hundreds of weddings, events, and portraits across Vadodara. My passion is creating timeless images that tell your unique story."
          useInvertedBackground={true}
          buttons={[
            { text: "View My Portfolio", href: "#gallery" },
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <MetricCardThree
          title="Trusted by Clients in Vadodara"
          description="Our Google reviews and client testimonials speak to our commitment to excellence."
          tag="Google Reviews"
          tagIcon={Star}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            { id: "1", icon: Star, title: "Google Rating", value: "4.9/5" },
            { id: "2", icon: Users, title: "Reviews", value: "179+" },
            { id: "3", icon: ThumbsUp, title: "Satisfied Clients", value: "500+" },
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardOne
          title="Our Portfolio"
          description="High-quality photography from recent projects. Each image represents our dedication to capturing perfection."
          tag="Gallery"
          tagIcon={Camera}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="bento-grid"
          carouselMode="buttons"
          products={[
            { id: "1", name: "Wedding Ceremony", price: "Wedding", imageSrc: "http://img.b2bpic.net/free-photo/bride-is-crying-listening-wedding-vow-from-groom_8353-11419.jpg", imageAlt: "Wedding ceremony moment" },
            { id: "2", name: "Bridal Portrait", price: "Wedding", imageSrc: "http://img.b2bpic.net/free-photo/pretty-bride-indoor-wedding-dress_624325-904.jpg", imageAlt: "Bridal portrait" },
            { id: "3", name: "Pre-Wedding Couple", price: "Pre-Wedding", imageSrc: "http://img.b2bpic.net/free-photo/young-happy-bride-wedding-dress-groom_624325-231.jpg", imageAlt: "Couple portrait" },
            { id: "4", name: "Family Portrait", price: "Portraits", imageSrc: "http://img.b2bpic.net/free-photo/joyful-family-nature_1098-1236.jpg", imageAlt: "Family portrait" },
            { id: "5", name: "Event Coverage", price: "Events", imageSrc: "http://img.b2bpic.net/free-photo/group-friends-having-fun-with-sparklers-drinks-white-party_23-2149485958.jpg", imageAlt: "Event photography" },
            { id: "6", name: "Reception Candid", price: "Wedding", imageSrc: "http://img.b2bpic.net/free-photo/wedding-couple-performing-first-dance-restaurant_8353-12297.jpg?_wi=2", imageAlt: "Reception moment" },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Stories"
          description="See what our happy clients have to say about their photography experience with Pixify Studio."
          tag="Testimonials"
          tagIcon={MessageCircle}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="auto"
          testimonials={[
            {
              id: "1",              name: "Anjali & Rahul",              role: "Bride & Groom",              testimonial: "Pratik captured every beautiful moment of our wedding day. The photos are absolutely stunning and we couldn't be happier. Highly recommended!",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-newlyweds-charming-bride-laid-her-head-her-handsome-groom-park_613910-18326.jpg",              imageAlt: "Anjali & Rahul"},
            {
              id: "2",              name: "Priya Sharma",              role: "Corporate Event Manager",              testimonial: "The event photography was professional and timely. All our corporate clients loved the final images. Will definitely book again for next year's event.",              imageSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-woman-posing-with-arms-crossed_74855-2813.jpg",              imageAlt: "Priya Sharma"},
            {
              id: "3",              name: "Vikram Patel",              role: "Family Portrait Client",              testimonial: "Amazing experience! Pratik made us feel comfortable during the shoot and delivered beautiful family portraits. Such attention to detail!",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "Vikram Patel"},
            {
              id: "4",              name: "Sneha Desai",              role: "Pre-Wedding Shoot",              testimonial: "Our pre-wedding shoot was the most romantic and fun experience. The photos are absolutely gorgeous. Thank you so much!",              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              imageAlt: "Sneha Desai"},
            {
              id: "5",              name: "Arjun Kapoor",              role: "Portrait Client",              testimonial: "Best portrait session ever! Pratik's professionalism and creativity resulted in timeless photos I'll cherish forever.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",              imageAlt: "Arjun Kapoor"},
            {
              id: "6",              name: "Neha & Nikhil",              role: "Wedding Couple",              testimonial: "From the first consultation to the final delivery, everything was perfect. Pratik is a true professional. Booking him again for our upcoming anniversary!",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-beautiful-bride-bridegroom-which-hugging-kissing-each-other-while-guests-holding-cold-sparkles-which-burning-creating-glowing-arch-night-ceremony-outdoor_8353-12110.jpg",              imageAlt: "Neha & Nikhil"},
          ]}
        />
      </div>

      <div id="inquiry" data-section="inquiry">
        <ContactSplitForm
          title="Quick Inquiry"
          description="Tell us about your photography needs and we'll get back to you within 24 hours with custom packages and pricing."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
            { name: "serviceType", type: "text", placeholder: "Type of Photography (Wedding, Portrait, etc.)", required: false },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your event or session details...",            rows: 5,
            required: true,
          }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/set-up-studio-shoot_53876-144951.jpg"
          imageAlt="Photography setup"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <TextAbout
          tag="Contact Information"
          tagIcon={MapPin}
          title="Pixify Studio | FF8 Saujanya Complex, Ajwa Rd, Opposite SBI Bank, Vadodara, Gujarat 390019 | Call: +91 70160 80009 | WhatsApp: +91 70160 80009 | Email: info@pixifystudio.com"
          useInvertedBackground={false}
          buttons={[
            { text: "WhatsApp Us", href: "https://wa.me/917016080009" },
            { text: "Get Directions", href: "https://maps.google.com/?q=FF8+Saujanya+Complex+Ajwa+Road+Vadodara" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Pixify Studio"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
