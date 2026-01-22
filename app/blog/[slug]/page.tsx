'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    slug: "spring-cleaning-tips-texas-homes",
    title: "10 Essential Spring Cleaning Tips for Texas Homes",
    excerpt: "Spring is the perfect time to refresh your home. Discover our top 10 tips for a thorough spring clean that will leave your space sparkling.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
    date: "March 15, 2024",
    category: "Tips & Tricks",
    readTime: "5 min read",
    author: "Fann's Cleaning Team",
    content: {
      introduction: "Spring cleaning is more than just a tradition—it's an opportunity to refresh your living space and start the season with a clean slate. In Texas, where pollen, dust, and humidity can take a toll on your home, a thorough spring cleaning is essential. Here are 10 proven tips from our professional cleaning team to help you tackle this important seasonal task.",
      sections: [
        {
          heading: "1. Start with a Plan",
          content: "Before diving in, create a room-by-room checklist. This helps you stay organized and ensures nothing gets overlooked. Prioritize high-traffic areas and rooms that haven't been deep cleaned recently."
        },
        {
          heading: "2. Declutter First, Clean Second",
          content: "Remove items you no longer need or use. Donate, sell, or dispose of them responsibly. Cleaning is much easier when you're not working around clutter, and you'll feel lighter in your refreshed space."
        },
        {
          heading: "3. Combat Texas Pollen",
          content: "Texas springs bring beautiful bluebonnets but also heavy pollen. Clean or replace HVAC filters, wipe down window sills, and wash curtains to reduce allergens. Consider using a HEPA filter vacuum for best results."
        },
        {
          heading: "4. Deep Clean Carpets and Upholstery",
          content: "Winter foot traffic and indoor activities leave carpets and furniture needing attention. Professional steam cleaning can remove embedded dirt, allergens, and odors that regular vacuuming misses."
        },
        {
          heading: "5. Don't Forget Ceiling Fans and Light Fixtures",
          content: "Dust accumulates on fan blades and light fixtures throughout the year. Clean these before running your AC regularly—otherwise, you'll be circulating dust throughout your home all summer."
        },
        {
          heading: "6. Refresh Your Kitchen Appliances",
          content: "Deep clean your oven, refrigerator (inside and out), and dishwasher. Don't forget to check and clean the refrigerator coils and range hood filters. These often-neglected areas impact both cleanliness and appliance efficiency."
        },
        {
          heading: "7. Tackle Windows Inside and Out",
          content: "Clean windows let in more natural light and improve your home's appearance. Use a squeegee and appropriate cleaning solution for streak-free results. Don't forget to clean window tracks and screens."
        },
        {
          heading: "8. Sanitize High-Touch Surfaces",
          content: "Doorknobs, light switches, cabinet handles, and remote controls harbor germs. Use appropriate disinfectants to sanitize these frequently touched areas, especially important for maintaining a healthy home."
        },
        {
          heading: "9. Organize Your Cleaning Supplies",
          content: "Take stock of your cleaning products and tools. Dispose of expired products, restock essentials, and organize everything for easy access. This makes future cleaning sessions more efficient."
        },
        {
          heading: "10. Consider Professional Help",
          content: "Some tasks are best left to professionals. Deep carpet cleaning, exterior window washing, and thorough duct cleaning require specialized equipment and expertise. Professional cleaners can also complete your spring cleaning faster and more thoroughly."
        }
      ],
      conclusion: "Spring cleaning doesn't have to be overwhelming. By breaking it into manageable tasks and following these professional tips, you can achieve a fresh, clean home that's ready for the warmer months ahead. If you'd like help with your spring cleaning in the Tomball, The Woodlands, or surrounding areas, Fann's Cleaning Services is here to help. Contact us today for a free quote!"
    }
  },
  {
    slug: "deep-cleaning-kitchen-guide",
    title: "The Ultimate Guide to Deep Cleaning Your Kitchen",
    excerpt: "From appliances to countertops, learn the professional techniques we use to make kitchens shine like new.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    date: "March 10, 2024",
    category: "Deep Cleaning",
    readTime: "8 min read",
    author: "Fann's Cleaning Team",
    content: {
      introduction: "The kitchen is the heart of your home, but it's also one of the hardest-working spaces that requires regular deep cleaning. Grease, food particles, and daily use can quickly make even the most beautiful kitchen look tired. This comprehensive guide shares professional techniques to deep clean every part of your kitchen.",
      sections: [
        {
          heading: "Preparing for a Deep Clean",
          content: "Start by clearing countertops and removing everything from cabinets and drawers that you'll be cleaning. Gather your supplies: degreaser, all-purpose cleaner, microfiber cloths, scrub brushes, and any specialized cleaners for specific surfaces. Having everything ready makes the process smoother and more efficient."
        },
        {
          heading: "Cabinets and Drawers",
          content: "Begin at the top and work down. Remove everything from upper cabinets, wipe down interiors with an all-purpose cleaner, and let them air dry. Clean cabinet exteriors with a degreaser, paying special attention to areas around handles where oils from hands accumulate. For wood cabinets, use a wood-safe cleaner to maintain the finish."
        },
        {
          heading: "Countertops and Backsplash",
          content: "Different materials require different approaches. For granite and marble, use pH-neutral cleaners. Laminate counters can handle most all-purpose cleaners. Clean your backsplash with a degreaser, using an old toothbrush for grout lines. For stubborn grease, let the cleaner sit for a few minutes before wiping."
        },
        {
          heading: "Appliances: The Refrigerator",
          content: "Remove all items, check expiration dates, and discard old food. Take out removable shelves and drawers, washing them in warm soapy water. Wipe down the interior with a solution of baking soda and water to clean and deodorize. Don't forget to clean the exterior, door seals, and pull out the fridge to vacuum the coils."
        },
        {
          heading: "Appliances: The Oven and Stovetop",
          content: "For the oven, use a commercial oven cleaner or make a paste with baking soda and water. Apply, let sit overnight, then scrub and wipe clean. For stovetops, remove burner grates and drip pans, soaking them in hot soapy water. Clean the stovetop surface with appropriate cleaner for gas or electric models. For glass tops, use a specialized glass cooktop cleaner."
        },
        {
          heading: "Appliances: Dishwasher and Microwave",
          content: "Run your dishwasher empty with a dishwasher cleaner or white vinegar to remove buildup and odors. Clean the filter and wipe down the door and seals. For microwaves, heat a bowl of water with lemon slices for 3 minutes, then wipe down the interior—the steam loosens stuck-on food."
        },
        {
          heading: "Sink and Faucet",
          content: "Scrub your sink with baking soda or a sink-specific cleaner. For stainless steel, scrub with the grain. Clean the faucet with a damp cloth and polish with a dry one. Don't forget the aerator—unscrew it and soak in vinegar to remove mineral deposits. For a fresh-smelling drain, pour baking soda followed by vinegar, let it fizz, then flush with hot water."
        },
        {
          heading: "Floors",
          content: "Sweep or vacuum thoroughly, getting into corners and under appliances if possible. Mop with a floor cleaner appropriate for your flooring type. For tile, clean grout lines with a grout cleaner and brush. Move appliances to clean underneath—you'll be surprised how much accumulates under the refrigerator and stove."
        },
        {
          heading: "Small Appliances and Finishing Touches",
          content: "Wipe down small appliances like the toaster, coffee maker, and blender. Clean inside the toaster by removing the crumb tray. Descale your coffee maker with vinegar. Wipe down all surfaces one final time, organize items as you return them to cabinets, and step back to admire your sparkling kitchen."
        },
        {
          heading: "Maintaining Your Clean Kitchen",
          content: "To keep your kitchen in top shape between deep cleans, wipe down surfaces daily, clean spills immediately, run the dishwasher regularly, and do a quick weekly wipe-down of cabinet fronts and appliances. These small habits make deep cleaning much easier when the time comes."
        }
      ],
      conclusion: "A deep-cleaned kitchen is healthier, more pleasant to cook in, and more inviting for family and guests. While this process takes time and effort, the results are worth it. If you'd prefer professional help to get your kitchen spotless, the team at Fann's Cleaning Services has the experience and tools to make your kitchen shine. Contact us today to schedule your kitchen deep clean!"
    }
  },
  {
    slug: "eco-friendly-cleaning-benefits",
    title: "Eco-Friendly Cleaning: Better for You, Better for Earth",
    excerpt: "Learn about the benefits of green cleaning products and why we use them exclusively in all our services.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
    date: "March 5, 2024",
    category: "Eco-Friendly",
    readTime: "6 min read",
    author: "Fann's Cleaning Team",
    content: {
      introduction: "At Fann's Cleaning Services, we're committed to using eco-friendly, green cleaning products exclusively. This isn't just a marketing choice—it's a fundamental commitment to the health of our clients, our team members, and our planet. In this article, we'll explore why green cleaning matters and how it benefits everyone.",
      sections: [
        {
          heading: "What Makes Cleaning Products 'Green'?",
          content: "Green or eco-friendly cleaning products are made from natural, biodegradable ingredients that minimize environmental impact. They're free from harsh chemicals like phosphates, chlorine, and artificial fragrances. These products are designed to clean effectively while being safer for people, pets, and the environment."
        },
        {
          heading: "Health Benefits for Your Family",
          content: "Traditional cleaning products can contain volatile organic compounds (VOCs) and other chemicals that affect indoor air quality. These can trigger allergies, asthma, and other respiratory issues. Green cleaning products significantly reduce exposure to these harmful substances, creating a healthier home environment—especially important for children, elderly family members, and anyone with sensitivities or chronic health conditions."
        },
        {
          heading: "Protecting Your Pets",
          content: "Pets are more vulnerable to the effects of harsh chemicals because they're closer to the ground where residues settle, and they groom themselves, potentially ingesting chemical residues. Eco-friendly cleaning products are much safer for your furry family members, giving you peace of mind that your clean home won't harm your pets."
        },
        {
          heading: "Better Indoor Air Quality",
          content: "Many conventional cleaners release chemicals into the air that can linger for hours or even days after cleaning. Green products produce fewer airborne chemicals, resulting in better indoor air quality. You'll notice the difference—your home smells fresh and clean without that harsh 'chemical' scent."
        },
        {
          heading: "Environmental Protection",
          content: "Conventional cleaning products can harm aquatic life and ecosystems when they enter waterways. Biodegradable green products break down naturally without leaving toxic residues. By choosing eco-friendly cleaning, you're helping protect local water supplies, soil, and wildlife. It's a small choice with a significant environmental impact."
        },
        {
          heading: "Effectiveness Isn't Compromised",
          content: "A common misconception is that green products don't clean as well. Modern eco-friendly cleaners are highly effective, using advanced formulations that harness the power of natural ingredients. At Fann's Cleaning, we've carefully selected products that meet our high standards for both cleaning performance and environmental responsibility."
        },
        {
          heading: "Sustainable Packaging",
          content: "Many green cleaning brands also focus on sustainable packaging, using recycled materials and designing bottles that can be reused. Some even offer concentrate formulas that reduce plastic waste. This holistic approach to sustainability extends the benefits beyond just the product itself."
        },
        {
          heading: "Supporting Responsible Businesses",
          content: "When you choose services that use eco-friendly products, you're supporting companies that prioritize sustainability and ethical practices. This creates market demand for greener alternatives, encouraging more businesses to adopt environmentally responsible practices."
        },
        {
          heading: "Cost-Effective in the Long Run",
          content: "While some green products may have a higher upfront cost, they're often more concentrated and effective, meaning you use less product per cleaning. Additionally, the health benefits and reduced environmental impact represent value that goes beyond the price tag."
        },
        {
          heading: "Making the Switch at Home",
          content: "If you're interested in using green cleaning products at home, start by replacing one product at a time. Look for certifications like Green Seal, EPA Safer Choice, or EcoLogo. Simple ingredients like vinegar, baking soda, and castile soap can handle many cleaning tasks effectively and inexpensively."
        }
      ],
      conclusion: "Eco-friendly cleaning is a win-win-win: better for your health, better for your home, and better for the environment. At Fann's Cleaning Services, we're proud to exclusively use green products that deliver exceptional results without compromise. When you choose our services, you're choosing a cleaner, healthier home and a healthier planet. Contact us today to experience the Fann's Cleaning difference!"
    }
  },
  {
    slug: "home-deep-cleaning-schedule",
    title: "How Often Should You Deep Clean Your Home?",
    excerpt: "Discover the optimal cleaning schedule for different areas of your home to maintain a healthy, pristine living space.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    date: "February 28, 2024",
    category: "Home Care",
    readTime: "4 min read",
    author: "Fann's Cleaning Team",
    content: {
      introduction: "Maintaining a clean home requires more than daily tidying—it needs strategic deep cleaning. But how often should you deep clean different areas? Too infrequent, and dirt and grime build up; too often, and you're wasting time and energy. Here's our professional guide to the optimal deep cleaning schedule for every part of your home.",
      sections: [
        {
          heading: "Daily Cleaning Tasks",
          content: "Some tasks should be part of your daily routine: wiping down kitchen counters and stovetops, washing dishes, quick bathroom wipe-downs, and spot-cleaning spills. These small daily habits prevent buildup and make deep cleaning much easier when the time comes."
        },
        {
          heading: "Weekly Deep Cleaning",
          content: "Every week, focus on high-traffic and high-use areas. Vacuum all floors and carpets, mop hard floors, clean bathrooms thoroughly (toilets, showers, sinks), change bedding, and dust surfaces. These weekly tasks keep your home consistently clean and healthy."
        },
        {
          heading: "Monthly Tasks",
          content: "Once a month, tackle tasks that don't need weekly attention but shouldn't be neglected: clean inside the refrigerator, wipe down cabinet fronts, clean light switches and doorknobs, dust ceiling fans and light fixtures, vacuum upholstery, and clean mirrors and windows. These monthly tasks address areas that accumulate dust and grime gradually."
        },
        {
          heading: "Quarterly Deep Cleaning",
          content: "Every 3 months, go deeper. Clean or replace HVAC filters, wash windows inside and out, clean window treatments (curtains, blinds), deep clean carpets and rugs, organize and clean closets, and wipe down baseboards and crown molding. Quarterly cleaning tackles the often-forgotten areas that impact your home's overall cleanliness."
        },
        {
          heading: "Bi-Annual Tasks",
          content: "Twice a year, typically spring and fall, address major cleaning projects: deep clean kitchen appliances (oven, refrigerator coils, dishwasher), wash walls and touch up paint if needed, clean under and behind large appliances, organize the garage, and clean outdoor spaces. These seasonal deep cleans keep your home in excellent condition year-round."
        },
        {
          heading: "Annual Deep Cleaning",
          content: "Once a year, consider professional services for carpet deep cleaning, air duct cleaning, pressure washing exterior surfaces, and professional window cleaning. These tasks often require specialized equipment and expertise to do properly."
        },
        {
          heading: "Factors That Affect Your Schedule",
          content: "Your ideal cleaning schedule depends on several factors: number of household members, presence of pets, whether anyone has allergies or asthma, and how much time you spend at home. Homes with children and pets may need more frequent deep cleaning, especially in high-traffic areas."
        },
        {
          heading: "Signs You Need to Deep Clean Sooner",
          content: "Don't wait for your scheduled time if you notice: visible dust buildup, lingering odors, allergy symptoms worsening, visible stains or grime, or simply feeling like your space isn't as fresh as it should be. Listen to your home and clean as needed."
        },
        {
          heading: "Creating Your Personal Schedule",
          content: "Use this guide as a starting point, then adjust based on your lifestyle and needs. Create a cleaning calendar or checklist to track tasks. Breaking deep cleaning into manageable chunks makes it less overwhelming and more sustainable."
        },
        {
          heading: "When to Hire Professional Help",
          content: "If maintaining this schedule feels overwhelming, or if certain tasks are too challenging, professional cleaning services can help. Whether you need regular maintenance cleaning or periodic deep cleans, professionals have the experience, tools, and techniques to keep your home in top condition."
        }
      ],
      conclusion: "A consistent deep cleaning schedule keeps your home healthier, more pleasant, and easier to maintain. By following these guidelines and adjusting for your specific needs, you'll enjoy a consistently clean and comfortable living space. If you need help establishing or maintaining your cleaning routine, Fann's Cleaning Services is here to help. Contact us for a customized cleaning plan that fits your schedule and budget!"
    }
  },
  {
    slug: "office-cleaning-productivity-health",
    title: "Office Cleaning: Why It Matters More Than You Think",
    excerpt: "A clean office isn't just about appearances. Learn how professional cleaning boosts productivity and employee health.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    date: "February 20, 2024",
    category: "Commercial",
    readTime: "7 min read",
    author: "Fann's Cleaning Team",
    content: {
      introduction: "Many business owners view office cleaning as a necessary expense, but it's actually an investment that pays dividends in employee health, productivity, and client perception. A clean office environment impacts your business in ways that go far beyond surface-level appearance. Let's explore why professional office cleaning matters more than you might think.",
      sections: [
        {
          heading: "First Impressions Matter",
          content: "Your office environment speaks volumes before you say a word. Clients, partners, and potential employees form instant judgments based on the cleanliness and organization of your workspace. A spotless, well-maintained office conveys professionalism, attention to detail, and respect for clients and employees. In contrast, a dirty or cluttered space can raise concerns about your business practices and reliability."
        },
        {
          heading: "Reduced Sick Days and Absenteeism",
          content: "Offices are breeding grounds for germs. Keyboards, phones, door handles, and shared spaces harbor bacteria and viruses that spread illness throughout your workforce. Regular professional cleaning with proper disinfection significantly reduces pathogen levels, leading to fewer sick days. Studies show that professional office cleaning can reduce sick-related absenteeism by up to 50%."
        },
        {
          heading: "Improved Air Quality",
          content: "Dust, allergens, and airborne particles accumulate in carpets, upholstery, and ventilation systems. Poor indoor air quality contributes to respiratory issues, allergies, headaches, and fatigue—all of which impact employee comfort and productivity. Professional cleaning includes proper vacuuming with HEPA filters, duct cleaning, and techniques that improve overall air quality."
        },
        {
          heading: "Increased Productivity",
          content: "A clean, organized environment reduces distractions and stress, allowing employees to focus on their work. When workers aren't worried about dirty surroundings or uncomfortable conditions, they're more engaged and productive. Additionally, employees in clean environments report higher job satisfaction and morale, which directly impacts productivity and retention."
        },
        {
          heading: "Extended Life of Office Assets",
          content: "Regular professional cleaning protects your investments in furniture, carpets, and equipment. Dust and grime cause premature wear on carpets and upholstery. Proper maintenance extends the life of these assets, saving money on replacements. A clean environment also helps office equipment like computers run cooler and last longer by reducing dust buildup."
        },
        {
          heading: "Compliance and Safety",
          content: "Certain industries have cleanliness standards and regulations. Professional cleaning ensures compliance with health and safety requirements. Additionally, proper cleaning reduces hazards like slippery floors, cluttered walkways, and accumulation of materials that could create fire risks."
        },
        {
          heading: "Mental Health and Well-being",
          content: "The connection between environment and mental health is well-documented. Cluttered, dirty spaces increase stress and anxiety, while clean, organized environments promote calm and focus. Investing in professional office cleaning shows employees that you value their well-being, which boosts morale and company loyalty."
        },
        {
          heading: "Professional Standards Beyond DIY",
          content: "While basic tidying can be handled in-house, professional cleaners bring expertise, industrial-grade equipment, and effective techniques that go beyond what typical office staff can achieve. They know how to properly disinfect, which products work best for different surfaces, and how to clean efficiently without disrupting business operations."
        },
        {
          heading: "Customized Cleaning Plans",
          content: "Every office has unique needs based on size, industry, and traffic patterns. Professional cleaning services create customized plans that address your specific requirements—whether that's daily light cleaning, weekly deep cleans, or specialized services like carpet cleaning or post-construction cleanup."
        },
        {
          heading: "Cost-Effective Investment",
          content: "When you calculate the costs of employee sick days, reduced productivity, early replacement of carpets and furniture, and potential loss of clients due to poor first impressions, professional cleaning proves to be highly cost-effective. It's not an expense—it's an investment in your business's success and your employees' well-being."
        }
      ],
      conclusion: "Professional office cleaning delivers measurable benefits that extend far beyond aesthetics. From reducing sick days and boosting productivity to creating positive impressions and protecting your investments, a clean office is fundamental to business success. If you're ready to see these benefits in your workplace, Fann's Cleaning Services offers comprehensive commercial cleaning tailored to your needs. Contact us today for a consultation and quote!"
    }
  },
  {
    slug: "texas-allergy-season-cleaning-tips",
    title: "Allergy Season in Texas: Cleaning Tips to Breathe Easier",
    excerpt: "Combat allergens with these professional cleaning techniques designed for Texas allergy season.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    date: "February 15, 2024",
    category: "Health",
    readTime: "5 min read",
    author: "Fann's Cleaning Team",
    content: {
      introduction: "Texas allergy season can be brutal. With cedar fever in winter, oak pollen in spring, and ragweed in fall, allergy sufferers face year-round challenges. While you can't control outdoor pollen, you can significantly reduce allergens inside your home with proper cleaning techniques. Here's how to create an allergen-reduced sanctuary in your home.",
      sections: [
        {
          heading: "Understanding Texas Allergens",
          content: "Texas is notorious for intense allergy seasons. Mountain cedar (December-February), oak pollen (March-May), and ragweed (August-November) are major culprits. These outdoor allergens find their way inside on clothes, shoes, pets, and through open windows. Once inside, they settle on surfaces and circulate through your HVAC system, causing ongoing symptoms."
        },
        {
          heading: "HVAC System: Your First Line of Defense",
          content: "Your HVAC system circulates air throughout your home, spreading allergens if not properly maintained. Change filters monthly during peak allergy season—use HEPA filters rated MERV 11 or higher. Consider professional duct cleaning to remove accumulated dust and pollen. Keep vents and returns clear and clean. During high pollen days, keep windows closed and rely on air conditioning."
        },
        {
          heading: "Vacuum Strategically",
          content: "Regular vacuuming is crucial, but technique matters. Use a vacuum with a HEPA filter to trap tiny allergen particles rather than redistributing them into the air. Vacuum at least twice weekly during allergy season, and daily in high-traffic areas. Go slowly to give the vacuum time to pull up embedded particles. Don't forget upholstery, curtains, and under furniture where allergens accumulate."
        },
        {
          heading: "Wash Bedding Frequently",
          content: "You spend a third of your life in bed, so keeping bedding allergen-free is crucial. Wash sheets, pillowcases, and blankets weekly in hot water (at least 130°F) to kill dust mites and remove pollen. Use allergen-proof covers on mattresses and pillows. Don't forget to regularly wash decorative pillows and comforters that often get overlooked."
        },
        {
          heading: "Reduce Carpet and Upholstery Allergens",
          content: "Carpets and upholstered furniture trap allergens deep in their fibers. Professional steam cleaning every 3-6 months removes allergens that regular vacuuming misses. Between professional cleanings, sprinkle baking soda on carpets, let it sit for 15 minutes, then vacuum thoroughly—this helps neutralize and lift allergens."
        },
        {
          heading: "Control Humidity",
          content: "Texas humidity can be high, creating ideal conditions for dust mites and mold—both major allergens. Keep indoor humidity between 30-50% using dehumidifiers or air conditioning. Fix any water leaks promptly and ensure bathrooms and kitchens are well-ventilated to prevent mold growth."
        },
        {
          heading: "Create a Pollen-Free Entry",
          content: "Prevent allergens from spreading throughout your home by creating a transition zone at entrances. Place doormats both outside and inside doors. Remove shoes at the door to avoid tracking pollen inside. Keep a basket near the entrance for keys and items that have been outside. Encourage family members to change clothes and wash hands after spending time outdoors during high pollen days."
        },
        {
          heading: "Clean Hard Surfaces Regularly",
          content: "Pollen and dust settle on all surfaces. Wipe down countertops, tables, and shelves with damp microfiber cloths at least twice weekly—damp cloths trap allergens instead of stirring them into the air. Don't forget window sills, ceiling fan blades, and the tops of doors and cabinets where dust accumulates."
        },
        {
          heading: "Pet Care and Allergens",
          content: "Pets bring outdoor allergens inside on their fur and paws. During allergy season, wipe your pet's paws and coat with a damp cloth after outdoor time. Bathe pets more frequently. Keep pets out of bedrooms to create allergen-free sleeping zones. Wash pet bedding weekly along with your own."
        },
        {
          heading: "Air Purifiers and Additional Help",
          content: "Consider using HEPA air purifiers in bedrooms and main living areas for additional allergen removal. While they don't replace cleaning, they provide continuous air filtration. For severe allergies or during peak season, professional deep cleaning can provide relief by thoroughly removing accumulated allergens from every surface."
        }
      ],
      conclusion: "Texas allergy season is challenging, but with these professional cleaning techniques, you can significantly reduce indoor allergens and breathe easier in your own home. Consistent cleaning, proper ventilation, and strategic prevention create a healthier environment for allergy sufferers. If you need help managing allergens in your home, Fann's Cleaning Services uses techniques and products specifically designed to reduce allergen levels. Contact us today to schedule an allergy-focused cleaning!"
    }
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white text-gray-900">
      {/* NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white shadow-md py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-slate-900 transition-colors">
                Fann's Cleaning
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link href="/#services" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                Services
              </Link>
              <Link href="/about" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                About
              </Link>
              <Link href="/blog" className="font-semibold text-emerald-600 hover:scale-105 transition-all">
                Blog
              </Link>
              <Link href="/#testimonials" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                Testimonials
              </Link>
              <Link href="/#contact" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+13465880262"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden xl:inline">(346) 588-0262</span>
                <span className="xl:hidden">Call</span>
              </a>
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-2xl animate-slide-down">
              <div className="flex flex-col space-y-4 px-4">
                <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  Services
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  About
                </Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-600 font-semibold py-2">
                  Blog
                </Link>
                <Link href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  Testimonials
                </Link>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-32 mt-20">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-indigo-900/90"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-6 group"
          >
            <span>←</span>
            <span className="group-hover:underline">Back to Blog</span>
          </Link>

          <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {post.content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Professional Cleaning?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact Fann's Cleaning Services today for a free quote!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13465880262"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (346) 588-0262
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              More Helpful Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost, i) => (
                  <Link
                    key={i}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-blue-600 font-semibold mb-2">
                        {relatedPost.category}
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fann's Cleaning</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/kfannscleaningservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/fannscleaningservices/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/CleaningFann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="X (Twitter)">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@fannscleaningservices4308" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#services" className="hover:text-white transition">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Serving Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+13465880262" className="hover:text-white transition">(346) 588-0262</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:fannsclean23@gmail.com" className="hover:text-white transition">fannsclean23@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p className="mb-2">© {new Date().getFullYear()} Fann's Cleaning Services. All rights reserved.</p>
            <p className="text-gray-500">
              Website crafted by{" "}
              <a
                href="https://nolawebdevelopment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                NOLA Web Development
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
