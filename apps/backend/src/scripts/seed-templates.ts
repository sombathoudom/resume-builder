import prisma from "../config/db";

async function seedTemplates() {
  try {
    console.log("🌱 Seeding CV templates...");

    // Create CV Template V1
    const templateV1 = await prisma.template.upsert({
      where: { component_name: "CvTempV1" },
      update: {},
      create: {
        name: "Professional CV Template V1",
        description:
          "A clean, professional CV template with modern design. Perfect for most industries and job applications.",
        preview_url: "/images/cv-templates/template-v1-preview.png",
        file_path: "/templates/cv-temp-v1.tsx",
        component_name: "CvTempV1",
        is_active: true,
      },
    });

    console.log("✅ Template V1 created:", templateV1.name);

    // You can add more templates here
    // const templateV2 = await prisma.template.upsert({
    //   where: { component_name: "CvTempV2" },
    //   update: {},
    //   create: {
    //     name: "Creative CV Template V2",
    //     description: "A creative, colorful CV template for design and creative professionals.",
    //     preview_url: "/images/cv-templates/template-v2-preview.png",
    //     file_path: "/templates/cv-temp-v2.tsx",
    //     component_name: "CvTempV2",
    //     is_active: true,
    //   },
    // });

    console.log("🎉 All templates seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding templates:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedTemplates().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
