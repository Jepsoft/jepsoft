"use client";
import { useEffect } from "react";
import { Head } from "next/head"; // Ensure you import Head to handle the meta tags and structured data

const StructuredData = () => {
  useEffect(() => {
    // Creating the first JSON-LD script for Organization
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Jepsoft",
      "url": "https://www.jepsoft.com",
      "logo": "https://www.jepsoft.com/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94 774835253",
        "contactType": "Customer Service",
        "areaServed": "LK",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/share/15eBfE183t/?mibextid=wwXIfr",
        "https://www.linkedin.com/company/jepsoft",
        "https://www.instagram.com/jepsoft?igsh=MXc2Y2RoMGlocnNrZw=="
      ]
    });

    // Creating JSON-LD for Local Business
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Jepsoft",
      "url": "https://www.jepsoft.com",
      "logo": "https://www.jepsoft.com/logo.webp",
      "description": "Jepsoft provides innovative web and software solutions for businesses.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Matara, Palatuwa",
        "addressLocality": "Matara",
        "addressRegion": "Southern Province",
        "postalCode": "81050",
        "addressCountry": "LK"
      },
      "telephone": "+94 774835253",
      "openingHours": "Mo-Su 09:00-18:00"
    });

    // Creating JSON-LD for Services offered by Jepsoft
    const servicesScript = document.createElement("script");
    servicesScript.type = "application/ld+json";
    servicesScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Jepsoft Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Custom Website Development",
          "image": "https://www.jepsoft.com/web-development.jpg",
          "description": "High-quality, responsive websites tailored to your business needs.",
          "provider": {
            "@type": "Organization",
            "name": "Jepsoft"
          },
          "offers": [
            {
              "@type": "Offer",
              "price": "Contact for Quote",
              "priceCurrency": "LKR",
              "url": "https://www.jepsoft.com/services/web-development"
            },
            {
              "@type": "Offer",
              "price": "Contact for Quote",
              "priceCurrency": "USD",
              "url": "https://www.jepsoft.com/services/web-development"
            }
          ]
        },
        {
          "@type": "Service",
          "name": "Software Development",
          "image": "https://www.jepsoft.com/software-development.jpg",
          "description": "Custom software solutions for businesses, ensuring high performance and scalability.",
          "provider": {
            "@type": "Organization",
            "name": "Jepsoft"
          },
          "offers": [
            {
              "@type": "Offer",
              "price": "Contact for Quote",
              "priceCurrency": "LKR",
              "url": "https://www.jepsoft.com/services/software-development"
            },
            {
              "@type": "Offer",
              "price": "Contact for Quote",
              "priceCurrency": "USD",
              "url": "https://www.jepsoft.com/services/software-development"
            }
          ]
        }
        // Add more services here as needed...
      ]
    });

    // Creating JSON-LD for Website search action
    const websiteSearchScript = document.createElement("script");
    websiteSearchScript.type = "application/ld+json";
    websiteSearchScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Jepsoft",
      "url": "https://www.jepsoft.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.jepsoft.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
<link rel="canonical" href="https://www.example.com/about-us" />

    // Append all scripts to document head
    document.head.appendChild(orgScript);
    document.head.appendChild(localBusinessScript);
    document.head.appendChild(servicesScript);
    document.head.appendChild(websiteSearchScript);

  }, []); // Empty dependency array ensures this runs once when the component mounts

  return null; // No need to render anything
};

export default StructuredData;
