
export const projects = [
    {
        id: 1,
        title: "MoArt Essence",
        category: "UI/UX Design",
        year: "2025",
        role: "Lead Designer & Developer",
        tools: ["Figma", "Rhino", "Keyshot", "Culture"],
        description: "Fusion of Art and Traditional Culture",
        overview: "MoArt Essence is a digital platform dedicated to combining traditional art with modern interactive experiences. In this fast-paced digital era, traditional art often struggles to reach younger audiences due to limited presentation forms. This project reimagines the connection between viewers and artwork by building an immersive online gallery using WebGL and dynamic parallax effects. Every pixel is carefully crafted to convey the breathing sensation of ink painting, allowing users to feel the profound depth of traditional culture with a swipe of their fingertips.",
        designProcess: [
            {
                title: "01. Cultural Immersion & Research",
                description: " Deeply studied the composition rules and 'leave-white' aesthetics of traditional Chinese ink painting. Interviewed multiple artists and curators to establish the core design concept of 'Rhythmic Vitality'."
            },
            {
                title: "02. Interactive Metaphor Extraction",
                description: "Translated the texture of rice paper and the spreading process of ink into digital interaction language. Explored how to simulate the weight and speed of brushstrokes through mouse hover and click actions."
            },
            {
                title: "03. Visual & Motion Design",
                description: "Adopted a minimalist UI framework to highlight the artwork itself. Developed custom Shaders to implement dynamic backgrounds of spreading ink, ensuring visual consistency."
            },
            {
                title: "04. Experience Optimization",
                description: "Optimized performance for different devices, ensuring high-resolution artworks load smoothly while retaining delicate texture details."
            }
        ],
        image: "/portfolio/MoArt Essence/cover.jpg",
        galleryImages: [
            "/portfolio/MoArt Essence/Group 6.jpg",
            "/portfolio/MoArt Essence/cover.jpg",
            "/portfolio/MoArt Essence/Page2.jpg",
            "/portfolio/MoArt Essence/Page3.jpg",
            "/portfolio/MoArt Essence/Page4.jpg"
        ],
        className: "col-span-1"
    },
    {
        id: 2,
        title: "Vista: The Unbound Journey",
        category: "Interactive Design",
        year: "2026",
        role: "Creative Technologist",
        tools: ["AIGC", "Figma", "Photoshop", "Blender"],
        description: "Exploring boundless journeys, creating immersive user experiences and narrative designs.",
        overview: "Vista is not just a website; it is a boundless journey unfolding across the screen. The project aims to break the linear logic of traditional web browsing and create a non-linear, exploratory narrative experience. By utilizing advanced parallax scrolling and 3D transition technologies, we transform every user interaction into a step in the journey. From grand landscapes to microscopic texture details, Vista invites users to act as explorers, traversing freely in digital space and experiencing an unprecedented sense of freedom.",
        designProcess: [
            {
                title: "01. Concept: Boundless",
                description: "Drew inspiration from boundless landscapes in nature, breaking the frame limitations of traditional webpages to conceive a free-flowing digital space without fixed boundaries."
            },
            {
                title: "02. Spatial Narrative Architecture",
                description: "Designed a multi-layer deep spatial navigation system. Users no longer browse pages but travel through scenes. Defined key emotional nodes to guide the user's exploration path."
            },
            {
                title: "03. Immersive Atmosphere",
                description: "Combined ambient sound effects with dynamic lighting to create an immersive atmosphere. Developed 3D scene components based on React Three Fiber to achieve smooth real-time rendering."
            },
            {
                title: "04. Polishing Details",
                description: "Fine-tuned the acceleration curve of every transition and introduced gravity sensor interaction (mobile), making every perspective shift natural and full of tension."
            }
        ],
        image: "/portfolio/The Unbound Journey/main.jpg",
        galleryImages: [
            "/portfolio/The Unbound Journey/main.jpg",
            "/portfolio/The Unbound Journey/1.jpg",
            "/portfolio/The Unbound Journey/2.png",
            "/portfolio/The Unbound Journey/3.jpg"
        ],
        className: "col-span-1 md:mt-32"
    },
    {
        id: 3,
        title: "Braille Bloom",
        category: "Accessibility Design",
        year: "2024",
        role: "Product Designer",
        tools: ["Figma", "Keyshot", "User Research", "Protopie"],
        description: "A Braille learning system designed for the visually impaired, letting accessible design bloom.",
        overview: "Braille Bloom is a Braille auxiliary learning system designed specifically for the visually impaired and their friends and families. In this project, design no longer serves only vision but extends to touch and hearing. We challenged traditional accessibility design thinking—not just for 'usability', but for 'delight'. By combining haptic feedback technology with high-contrast visual guides, we make the process of learning Braille as natural, vivid, and hopeful as a blooming flower.",
        designProcess: [
            {
                title: "01. Empathy Research",
                description: "Conducted field research in schools for the blind and visually impaired families to observe learning pain points. Found that existing learning tools were boring and lacked emotional connection."
            },
            {
                title: "02. Multi-sensory Interaction Model",
                description: "Constructed a 'Tactile-Auditory-Visual' trinity interaction model. Each Braille point corresponds to specific audio feedback and vibration patterns."
            },
            {
                title: "03. Inclusive Interface Design",
                description: "Adopted a high-contrast color scheme and large typography to ensure low-vision groups can use it easily. The interface layout is simple and intuitive, supporting seamless navigation with screen readers."
            },
            {
                title: "04. User Verification",
                description: "Invited visually impaired users to participate in multiple rounds of usability testing. Optimized speech rate and clarity of voice commands based on feedback, ensuring true product accessibility."
            }
        ],
        image: "/portfolio/Braille Bloom/cover.png",
        galleryImages: [
            "/portfolio/Braille Bloom/cover.png",
            "/portfolio/Braille Bloom/page2.jpg"
        ],
        className: "col-span-1"
    },
    {
        id: 4,
        title: "Methodmate",
        category: "Research & Development",
        year: "2025",
        role: "Full Stack Developer",
        tools: ["Node.js", "TypeScript", "PostgreSQL"],
        description: "A digital tool providing research methodology for novice researchers.",
        overview: "Methodmate is a digital tool dedicated to lowering the entry threshold for academic research. For many novice researchers, complex research methodologies are often daunting. Methodmate transforms obscure academic theories into visualized, modular operational workflows. It provides not only tools but also a thinking scaffold, helping users establish systematic research thinking from topic selection to data analysis, making the path of academic exploration clearer and more traceable.",
        designProcess: [
            {
                title: "01. Pain Point Analysis",
                description: "Conducted questionnaire surveys among graduate students, identifying 'topic confusion', 'method selection difficulty', and 'process chaos' as the three core pain points."
            },
            {
                title: "02. Structured Process Reconstruction",
                description: "Deconstructed standardized academic research processes into executable step cards. Designed a 'Research Map' feature to allow users to grasp project progress and global vision at any time."
            },
            {
                title: "03. Information Visualization Design",
                description: "Designed a clear system of icons and charts to explain abstract research models. The interface style remains calm and rational to reduce cognitive load."
            },
            {
                title: "04. Iteration & Feedback",
                description: "Conducted small-scale pilots in university laboratories to collect usage data. Added a 'Literature Management' plugin interface based on feedback, enhancing the tool's practicality and extensibility."
            }
        ],
        image: "/portfolio/Methodmate/cover.png",
        galleryImages: [
            "/portfolio/Methodmate/cover.png",
            "/portfolio/Methodmate/figure4.png",
            "/portfolio/Methodmate/figure5.png"
        ],
        className: "col-span-1 md:mt-32"
    }
];
