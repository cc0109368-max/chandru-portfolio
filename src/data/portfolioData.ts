export interface CaseStudy {
  overview: string;
  problemStatement: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  challenges: string[];
  contributions: string[];
  resultsAndLearnings: string[];
  screenshots: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  links: {
    liveDemo?: string;
    sourceCode?: string;
    notebookUrl?: string;
    documentationUrl?: string;
  };
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: "AI & RAG Systems" | "Machine Learning & NLP" | "Frontend & Web UI" | "Core CS & Algorithms";
  shortDescription: string;
  problemSolved: string;
  myContribution: string;
  technologies: string[];
  featuredScreenshot: string;
  featuredScreenshotAlt: string;
  verifiedLinks: {
    liveDemo?: string;
    github?: string;
    notebook?: string;
    documentation?: string;
  };
  caseStudy: CaseStudy;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: Array<{
    name: string;
    context: string;
  }>;
}

export interface FreelanceService {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    logoText: string;
    title: string;
    roles: string[];
    tagline: string;
    supportingDescription: string;
    location: string;
    statusText: string;
    availableForHire: boolean;
    email: string;
    linkedin: string;
    github: string;
    objective: string;
  };
  resume: {
    available: boolean;
    fileUrl: string;
    requestSubject: string;
    note: string;
  };
  about: {
    lead: string;
    paragraphs: string[];
    focusAreas: Array<{
      label: string;
      detail: string;
    }>;
  };
  projects: ProjectItem[];
  freelance: {
    roleTitle: string;
    statusLabel: string;
    summary: string;
    services: FreelanceService[];
    workflowSteps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    editableClientEngagementsNote: string;
  };
  skills: SkillCategory[];
  education: {
    degree: string;
    institution: string;
    location: string;
    expectedGraduation: string;
    batch: string;
    currentStanding: string;
    coursework: string[];
    programsAndTraining: Array<{
      title: string;
      organizer: string;
      focus: string;
    }>;
  };
  contact: {
    headline: string;
    closingMessage: string;
    responseNote: string;
  };
}

export const portfolioData: PortfolioConfig = {
  personal: {
    name: "Chandru",
    logoText: "CHANDRU.",
    title: "Full-Stack Developer | AI & ML Undergraduate | Freelance Developer",
    roles: [
      "Full-Stack Developer Internships",
      "AI / GenAI Developer Internships",
      "Software Developer Internships",
      "Freelance Web Development"
    ],
    tagline: "Building useful digital experiences with code and AI.",
    supportingDescription:
      "I'm Chandru, a B.Tech Artificial Intelligence and Machine Learning undergraduate and freelance developer. I work across full-stack development and explore practical applications of Generative AI.",
    location: "Tamil Nadu, India",
    statusText: "Open to Full-Stack & AI/GenAI Internships · Available for Freelance Web Projects",
    availableForHire: true,
    email: "chandrux360@gmail.com",
    linkedin: "https://www.linkedin.com/in/chandru-ai-ml/",
    github: "https://github.com/cc0109368-max",
    objective:
      "I develop web applications, work with modern full-stack technologies and explore practical applications of Generative AI and LLM-based systems."
  },
  resume: {
    available: false,
    fileUrl: "/resume/Chandru_Resume.pdf",
    requestSubject: "Resume & Internship Inquiry — Chandru",
    note: "Set resume.available = true in src/data/portfolioData.ts once Chandru_Resume.pdf is placed in public/resume/."
  },
  about: {
    lead:
      "Developing software engineer focused on full-stack web architecture and practical Generative AI systems.",
    paragraphs: [
      "I am currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at B.S. Abdur Rahman Crescent Institute of Science & Technology in Tamil Nadu, India (Expected Graduation: 2029). My academic foundation in data structures, algorithms, and probability pairs directly with hands-on software engineering.",
      "Across full-stack web development, I build responsive frontends with React.js, TypeScript, and Tailwind CSS, and architect backend REST APIs using Node.js, Express.js, JWT authentication, PostgreSQL, Supabase, and Prisma ORM. As an independent freelance developer, I focus on translating functional requirements into clean, maintainable web interfaces and reliable backend workflows.",
      "In parallel, I explore applied Generative AI—integrating the Gemini API, engineering structured prompts, generating dense vector embeddings, and constructing Retrieval-Augmented Generation (RAG) pipelines with FAISS and ChromaDB. I learn best by building, testing, and iterating on real software."
    ],
    focusAreas: [
      {
        label: "Full-Stack Web Engineering",
        detail: "React.js, TypeScript, Tailwind CSS, Node.js, Express.js, REST APIs, PostgreSQL, Supabase & Prisma ORM."
      },
      {
        label: "Applied Generative AI & RAG",
        detail: "Gemini API integration, dense text embeddings, FAISS & ChromaDB vector retrieval, and prompt engineering."
      },
      {
        label: "Independent Freelance Delivery",
        detail: "Client-oriented web development, responsive UI implementation, API/database integration, and cloud deployment."
      }
    ]
  },
  projects: [
    {
      id: "rag-product-review-search",
      slug: "semantic-product-review-rag-pipeline",
      number: "01",
      title: "Semantic Product Review Search & RAG Pipeline",
      category: "AI & RAG Systems",
      shortDescription:
        "End-to-end semantic vector search and Retrieval-Augmented Generation (RAG) system built over 50,000 e-commerce product reviews using Sentence-Transformers, FAISS, LangChain, and Llama-2.",
      problemSolved:
        "Traditional keyword search fails when users query concepts like 'energy efficient air cooler' while customer reviews describe 'low power consumption' or 'saves electricity', resulting in missed relevant evidence.",
      myContribution:
        "Cleaned a 205,052-row Flipkart review dataset, generated 384-dimensional embeddings for 50,000 sampled reviews using all-MiniLM-L6-v2, built an L2-normalized FAISS IndexFlatIP vector store, integrated a LangChain RetrievalQA chain with Llama-2-7B-Chat, and benchmarked Precision@K and Recall@K across K=1..100.",
      technologies: [
        "Python",
        "RAG Systems",
        "Sentence-Transformers",
        "FAISS",
        "LangChain",
        "Llama-2-7B GGML",
        "Scikit-Learn (PCA)",
        "Pandas & Seaborn"
      ],
      featuredScreenshot: "/images/projects/rag_precision_recall.png",
      featuredScreenshotAlt:
        "Precision@K and Recall@K evaluation curves generated from the FAISS vector search pipeline",
      verifiedLinks: {
        notebook: "https://colab.research.google.com/drive/13-JwZ1eQpDHLbd2YsGPTFMXQ8K5UvNzD",
        github: "https://github.com/cc0109368-max"
      },
      caseStudy: {
        overview:
          "Developed a complete Semantic Search and Retrieval-Augmented Generation (RAG) pipeline on the Flipkart Product Customer Reviews dataset (205,052 total rows; 180,379 cleaned rows after removing missing review/summary entries, with a 50,000-review stratified sample indexed for dense retrieval).",
        problemStatement:
          "Keyword-matching search engines require exact lexical overlap between a user's query and product reviews. When shoppers ask natural-language questions about appliance power efficiency, build quality, or installation friction, lexical search misses semantically equivalent reviews and cannot synthesize multi-review answers.",
        solution:
          "Implemented dense vector encoding with sentence-transformers/all-MiniLM-L6-v2 (384-dimensional vectors), applied L2 normalization prior to indexing in FAISS IndexFlatIP for exact cosine similarity retrieval, and connected the vector store to a LangChain RetrievalQA pipeline powered by TheBloke/Llama-2-7B-Chat-GGML.",
        architecture: [
          "Data Ingestion & Cleaning: Loaded 205,052 Flipkart reviews in Pandas, filtered 24,673 incomplete records to retain 180,379 verified reviews across 841 unique products, and sampled 50,000 records (random_state=40).",
          "Dense Embedding Layer: Encoded review summaries in batches of 1,024 using SentenceTransformer('all-MiniLM-L6-v2') into a (50000, 384) float32 matrix persisted via pickle.",
          "Dimensionality Reduction & EDA: Projected 384-D vectors into 2D principal components via Scikit-Learn PCA to inspect sentiment/rating cluster separation across 1–5 star scores.",
          "FAISS Cosine Index: Applied faiss.normalize_L2(embeddings) first, then indexed all 50,000 vectors into faiss.IndexFlatIP(384) for inner-product cosine similarity lookup.",
          "LangChain RAG Synthesis: Wrapped documents with metadata (Review title, Rating) into LangchainFAISS and executed RetrievalQA (stuff chain, top-k=3 and top-k=5) with Llama-2-7B-Chat-GGML.",
          "IR Evaluation Suite: Built automated Precision@K and Recall@K evaluators across K in {1, 3, 5, 10, 50, 100} plus a structured manual evaluation template scoring Relevance, Faithfulness, and Completeness."
        ],
        technologies: [
          "Python 3.12",
          "sentence-transformers (all-MiniLM-L6-v2)",
          "faiss-cpu (IndexFlatIP)",
          "LangChain & langchain-huggingface",
          "CTransformers (Llama-2-7B-Chat-GGML)",
          "Scikit-Learn (PCA)",
          "Pandas, NumPy, Matplotlib, Seaborn, WordCloud"
        ],
        challenges: [
          "Ensuring accurate cosine similarity in FAISS: IndexFlatIP computes raw dot products unless vectors are unit-normalized; enforced strict L2 normalization on both document embeddings before index.add() and query vectors before index.search().",
          "Ground-truth construction for semantic evaluation: Requiring all query keywords to match created artificially sparse ground-truth pools; refined relevance ground truth to multi-keyword overlap (813 relevant docs for 'sound quality', 3,758 for 'poor quality product') to measure realistic Precision-Recall curves.",
          "Context window vs. completeness trade-off in RAG: Tested top-k=3 vs. top-k=5 retrieval on Google Nest Mini queries, observing that k=5 captured comparative user insights (e.g., installation difficulty vs. Alexa feature parity) that k=3 missed."
        ],
        contributions: [
          "Wrote the complete data cleaning, exploratory analysis, length distribution, and word-cloud visualization pipeline.",
          "Implemented batched Sentence-Transformer encoding with checkpoint caching and 2D PCA cluster visualization.",
          "Constructed the normalized FAISS IndexFlatIP retrieval engine and LangChain RetrievalQA integration.",
          "Authored the Precision@K / Recall@K benchmarking suite and manual RAG evaluation rubric (Relevance, Faithfulness, Completeness)."
        ],
        resultsAndLearnings: [
          "Indexed 50,000 product reviews into a 384-D FAISS index with sub-second top-K semantic retrieval.",
          "Achieved 1.00 Precision@10 and 0.95 Precision@100 on 'sound quality' queries, demonstrating strong semantic clustering for domain-specific electronics attributes.",
          "Demonstrated how increasing retriever top-k from 3 to 5 directly improved answer completeness in Llama-2-7B RAG synthesis while highlighting the classic precision-recall trade-off as K scales to 100."
        ],
        screenshots: [
          {
            src: "/images/projects/rag_precision_recall.png",
            alt: "Precision@K and Recall@K evaluation curves across K=1 to 100",
            caption: "Actual notebook output: Precision@K and Recall@K trade-off curves across K = 1, 3, 5, 10, 50, 100."
          },
          {
            src: "/images/projects/rag_pca_embeddings.png",
            alt: "2D PCA projection of 50,000 review embeddings colored by review score",
            caption: "Actual notebook output: 2D PCA projection of 50,000 384-D review embeddings colored by 1–5 star product rating."
          }
        ],
        links: {
          notebookUrl: "https://colab.research.google.com/drive/13-JwZ1eQpDHLbd2YsGPTFMXQ8K5UvNzD",
          sourceCode: "https://github.com/cc0109368-max"
        }
      }
    },
    {
      id: "gemini-embeddings-sentiment-classifier",
      slug: "gemini-embeddings-sentiment-chromadb",
      number: "02",
      title: "Gemini Text Embeddings & Sentiment Classification Engine",
      category: "Machine Learning & NLP",
      shortDescription:
        "Applied NLP pipeline combining Google Gemini API text embeddings (text-embedding-004), UMAP manifold visualization, XGBoost multi-class sentiment classification, and ChromaDB vector retrieval.",
      problemSolved:
        "Raw text reviews and short social posts lack structured numerical representations for downstream classifiers and FAQ retrieval systems, while unbatched API calls hit throughput bottlenecks.",
      myContribution:
        "Built a batched embedding generator using google-generativeai (models/text-embedding-004, 768-D vectors), trained an XGBoost multi-class sentiment model (multi:softmax), created 2D UMAP projections with adjustText, and implemented cosine-similarity FAQ retrieval plus ChromaDB collection search.",
      technologies: [
        "Python",
        "Gemini API Integration",
        "text-embedding-004",
        "XGBoost",
        "ChromaDB",
        "UMAP",
        "Scikit-Learn",
        "Pandas & NumPy"
      ],
      featuredScreenshot: "/images/projects/gemini_lengths_dist.png",
      featuredScreenshotAlt:
        "Text length and distribution analysis plot from the NLP embedding notebook",
      verifiedLinks: {
        notebook: "https://colab.research.google.com/drive/10quwMF6yOsX5f3IVPRuw1R3-ppX-TAln",
        documentation: "https://colab.research.google.com/drive/1qVfuuLfDqIHw7we5paz4Qc19YXWsy27Q",
        github: "https://github.com/cc0109368-max"
      },
      caseStudy: {
        overview:
          "Developed across two verified Google Colab notebooks ('Understanding_and_Applying_Text_Embeddings_in_LLM_Systems_Gemini.ipynb' and 'Chandru Embedding Project.ipynb'), this project explores how 768-dimensional dense embeddings from Google's Gemini API power visualization, supervised sentiment classification, and vector database retrieval.",
        problemStatement:
          "Developing reliable NLP applications requires bridging foundation-model embeddings with classical machine learning classifiers and lightweight vector databases, while handling API batching and high-dimensional vector interpretation.",
        solution:
          "Engineered a reusable Python embedding module around Gemini's models/text-embedding-004 endpoint (retrieval_document and classification task types), piped the resulting 768-dimensional vectors into UMAP for 2D semantic clustering, trained an XGBoost classifier for sentiment prediction, and indexed document chunks into ChromaDB for natural-language Q&A.",
        architecture: [
          "Batched Gemini Embedding Client: Implemented get_gemini_embeddings_ld() with 50-record batch loops calling genai.embed_content(model='models/text-embedding-004') to produce (N, 768) NumPy feature matrices.",
          "Manifold Projection (UMAP): Reduced 768-D token and vocabulary vectors into 2D space using umap.UMAP(n_neighbors=10, min_dist=0.3, random_state=42) with automated label collision avoidance via adjustText.",
          "Downstream XGBoost Classifier: Mapped Neutral (0), Negative (1), and Positive (2) labels with stratified 80/20 train-test splits and trained xgb.XGBClassifier(objective='multi:softmax', eval_metric='mlogloss').",
          "Semantic FAQ & ChromaDB Retriever: Computed cosine_similarity() matrices for instant FAQ matching (e.g., matching 'I can't pay for the subscription' to payment-failure guides) and persisted document embeddings in a ChromaDB collection (pet_collection_embd)."
        ],
        technologies: [
          "Python 3.12",
          "google-generativeai (Gemini API models/text-embedding-004)",
          "XGBoost (multi:softmax & binary:logistic)",
          "ChromaDB Vector Database",
          "UMAP (umap-learn) & adjustText",
          "Scikit-Learn (train_test_split, cosine_similarity, classification_report)",
          "Pandas, NumPy, Matplotlib"
        ],
        challenges: [
          "Handling Gemini API batching constraints: Because embed_content processes items sequentially per request in the standard loop, structured 50-item batching functions to manage memory and inspect intermediate (N, 768) array shapes.",
          "Preventing label overlap in 2D embedding plots: High-density semantic clusters caused overlapping text annotations in Matplotlib; integrated adjustText with arrow pointers to keep 250-word UMAP projections legible.",
          "Class balance in multi-class tweet sentiment: Used stratified train/test splitting (stratify=y, random_state=42) to preserve Neutral, Negative, and Positive proportions during evaluation."
        ],
        contributions: [
          "Implemented the Gemini API embedding wrappers for single-query and batched dataset processing.",
          "Built the UMAP 2D projection plots and cosine-similarity FAQ retrieval pipeline.",
          "Trained and evaluated the XGBoost sentiment classification pipeline and real-time predict_sentiment() inference helper.",
          "Configured the ChromaDB collection ingestion and semantic query retrieval workflow."
        ],
        resultsAndLearnings: [
          "Generated 768-dimensional Gemini embeddings and achieved 75% overall test accuracy (0.86 Neutral precision, 0.83 Negative recall, 0.80 Positive F1-score) on the held-out tweet evaluation split.",
          "Verified semantic FAQ retrieval where a natural query ('I can't pay for the subscription') accurately ranked 'Payment failed while purchasing the plan' and 'Guide to fix payment failure issues' as top cosine-similarity matches.",
          "Gained practical experience migrating between Google's generative AI SDK patterns and combining LLM embeddings with gradient-boosted decision trees."
        ],
        screenshots: [
          {
            src: "/images/projects/gemini_lengths_dist.png",
            alt: "Text and summary length distribution histograms with KDE curves",
            caption: "Actual notebook output: Text and summary length distribution analysis with kernel density estimation."
          },
          {
            src: "/images/projects/gemini_hist_kde.png",
            alt: "Statistical distribution and kurtosis analysis plot from Colab notebook",
            caption: "Actual notebook output: Statistical distribution & KDE analysis from Chandru's Python data science notebooks."
          }
        ],
        links: {
          notebookUrl: "https://colab.research.google.com/drive/10quwMF6yOsX5f3IVPRuw1R3-ppX-TAln",
          documentationUrl: "https://colab.research.google.com/drive/1qVfuuLfDqIHw7we5paz4Qc19YXWsy27Q",
          sourceCode: "https://github.com/cc0109368-max"
        }
      }
    },
    {
      id: "responsive-web-ui-component-suite",
      slug: "responsive-web-ui-component-suite",
      number: "03",
      title: "Responsive Web UI & Frontend Component Suite",
      category: "Frontend & Web UI",
      shortDescription:
        "Collection of 9 responsive frontend layouts and interactive web UI components built with semantic HTML5, modern CSS3 Flexbox/Grid, Bootstrap 5, and vanilla JavaScript.",
      problemSolved:
        "Building clean, mobile-friendly interfaces requires mastering core DOM structure, CSS layout primitives, responsive breakpoints, and accessible interactive drawers before relying on heavy abstractions.",
      myContribution:
        "Designed, coded, and verified 9 complete frontend builds—including a SaaS Pricing Table, Bootstrap 5 Product Landing Page, E-Commerce Product Card, Two-Column Responsive Blog, CSS Grid Photography Galleries, and an interactive Sliding Drawer Navigation Menu.",
      technologies: [
        "HTML5",
        "CSS3 (Flexbox & Grid)",
        "JavaScript (ES6+)",
        "Bootstrap 5",
        "Responsive Design",
        "DOM Manipulation"
      ],
      featuredScreenshot: "/images/projects/web_landing_page.png",
      featuredScreenshotAlt:
        "Bootstrap 5 Landing Page rendered in Chandru's development environment (ID: N25C01A0050)",
      verifiedLinks: {
        documentation: "https://drive.google.com/file/d/1KBW5ZP6m6bsMhO2F_hjeukY8dnEMtoWi/view?usp=drivesdk",
        github: "https://github.com/cc0109368-max/ml"
      },
      caseStudy: {
        overview:
          "Completed as a comprehensive 9-module Web Technologies implementation record (CSE 1161, Register No: 250211601022, NIAT ID: N25C01A0050), this suite demonstrates foundational frontend craftsmanship across layout engineering, component styling, and interactive navigation.",
        problemStatement:
          "Many junior developers jump straight into component libraries without understanding semantic HTML structure, responsive CSS Grid/Flexbox behavior, card hierarchy, or stateful DOM toggling.",
        solution:
          "Built 9 standalone, responsive web interfaces from scratch using semantic HTML5, custom CSS3 stylesheets, Bootstrap 5 utility classes, and vanilla JavaScript event listeners, validating each layout across desktop and mobile viewports.",
        architecture: [
          "Module 1–2 (Personal Portfolio & E-Commerce Product Showcase): Semantic sectioning (<header>, <section>, <footer>) with elevated product cards, box-shadow depth, and dual CTA button states.",
          "Module 3 (Two-Column Responsive Blog Layout): CSS Flexbox main-content + sidebar architecture with responsive stacking on screens under 800px.",
          "Module 4–5 (Bootstrap 5 Landing Page & 3-Tier Pricing Table): Responsive 12-column grid hero section and a tiered SaaS pricing matrix (Basic $9/mo, Pro $29/mo highlighted, Enterprise $99/mo).",
          "Module 6–8 (Responsive & Hover-Effect Image Galleries): CSS Grid auto-fit / minmax() gallery layouts with smooth transform: scale() and box-shadow hover transitions.",
          "Module 9 (Interactive Sliding Drawer Navigation): Off-canvas sidebar menu controlled via JavaScript classList.toggle('open'), backdrop overlay dismissal, and Escape-key accessibility handler."
        ],
        technologies: [
          "Semantic HTML5",
          "CSS3 (Flexbox, CSS Grid, Media Queries, Transitions)",
          "Bootstrap 5.3 Grid & Components",
          "Vanilla JavaScript (DOM Events, Keyboard Accessibility)"
        ],
        challenges: [
          "Preventing horizontal overflow on narrow mobile viewports: Combined CSS Grid repeat(auto-fit, minmax(220px, 1fr)) with fluid max-width image constraints.",
          "Accessible off-canvas navigation state: Synchronized the drawer open/close state across hamburger click, overlay click, and Escape keydown events so users never get trapped in an open menu."
        ],
        contributions: [
          "Authored all HTML5 markup, custom CSS3 stylesheets, and JavaScript interaction logic across all 9 modules.",
          "Tested and documented rendered browser outputs in the verified Crescent / NIAT IDE workspace."
        ],
        resultsAndLearnings: [
          "Delivered 9 verified, responsive frontend modules covering the most common commercial web patterns (landing pages, pricing tables, product cards, blogs, galleries, and mobile drawers).",
          "Established the CSS layout and DOM fundamentals that now inform my React.js and Tailwind CSS component architecture."
        ],
        screenshots: [
          {
            src: "/images/projects/web_landing_page.png",
            alt: "Bootstrap 5 Landing Page output in Chandru's workspace",
            caption: "Verified IDE output (Chandru · ID: N25C01A0050): Responsive Bootstrap 5 Landing Page."
          },
          {
            src: "/images/projects/web_pricing_table.png",
            alt: "Three-Tier SaaS Pricing Table output in Chandru's workspace",
            caption: "Verified IDE output (Chandru · ID: N25C01A0050): 3-Tier SaaS Pricing Table component."
          },
          {
            src: "/images/projects/web_blog_layout.png",
            alt: "Two-column responsive blog layout output in Chandru's workspace",
            caption: "Verified IDE output (Chandru · ID: N25C01A0050): Two-Column Responsive Blog Layout."
          }
        ],
        links: {
          documentationUrl: "https://drive.google.com/file/d/1KBW5ZP6m6bsMhO2F_hjeukY8dnEMtoWi/view?usp=drivesdk",
          sourceCode: "https://github.com/cc0109368-max/ml"
        }
      }
    },
    {
      id: "core-dsa-algorithmic-systems-cpp",
      slug: "core-dsa-algorithmic-systems-cpp",
      number: "04",
      title: "Core Data Structures & Algorithmic Systems Suite",
      category: "Core CS & Algorithms",
      shortDescription:
        "17 modular C++ implementations of fundamental data structures and real-world system simulations—spanning Stack expression evaluators, Priority-Queue service simulators, Hashing, Trees, BSTs, and Heaps.",
      problemSolved:
        "Writing performant backend services requires a deep grasp of memory-safe pointer manipulation, asymptotic time complexity, and choosing the right data structure for lookup, scheduling, and parsing tasks.",
      myContribution:
        "Implemented and verified 17 standalone C++ programs across Semesters II and III (CSE 1263 & CSE 2164), building everything from a Vector-based Contact Manager and Hash Attendance Tracker to Floyd's Cycle Detection, Infix-to-Postfix Stack Calculators, Binary Tree Views, BST K-th Smallest lookup, and Min/Max Heaps.",
      technologies: [
        "C++ (STL)",
        "Data Structures & Algorithms",
        "Stacks & Priority Queues",
        "Linked Lists & Pointers",
        "Binary Trees & BST",
        "Min-Heap & Max-Heap",
        "Hashing"
      ],
      featuredScreenshot: "/images/projects/cpp_contact_vector.png",
      featuredScreenshotAlt:
        "Vector-based Contact Management System executing in Chandru's C++ IDE (ID: N25C01A0050)",
      verifiedLinks: {
        documentation: "https://drive.google.com/file/d/1LMVPatnq2bEnMqlLg5ys2qyXEV65yFaV/view?usp=drivesdk",
        notebook: "https://drive.google.com/file/d/1u3GVC3_Iltz5h-Yx5HDNrsl1jpIyGoGV/view?usp=drivesdk",
        github: "https://github.com/cc0109368-max"
      },
      caseStudy: {
        overview:
          "Developed across two university laboratory courses (CSE 1263 Data Structures I and CSE 2164 Data Structures II at B.S. Abdur Rahman Crescent Institute of Science & Technology), this 17-program suite translates theoretical computer science structures into working C++ command-line utilities.",
        problemStatement:
          "Software engineering interviews and backend systems alike demand fluency in pointer manipulation, tree traversals, priority scheduling, and expression parsing without relying on black-box libraries.",
        solution:
          "Engineered 17 self-contained C++ programs from scratch—covering both applied mini-systems (Café Billing, Student Login & Marks, Vector Contact Manager, Queue/Stack/Priority-Queue Customer Service Simulator, Hash-based Attendance Tracker) and core algorithmic primitives (Bit Manipulation, Floyd's Cycle Detection, Stack Infix-to-Postfix Evaluator, Binary Tree Diameter & Top/Right Views, BST Delete & K-th Smallest, and Heapify).",
        architecture: [
          "Applied Mini-Systems (Semester II, 7 Modules): Built interactive CLI tools using std::vector, std::queue, std::stack, std::priority_queue, and modular hashing functions for contact lookup, ticket prioritization, and student attendance.",
          "Linear Structures & Bitwise Engine (Semester III, Modules 1–7): Implemented custom O(N) string pattern search, multi-base number conversion (Base 2/8/10/16), bitwise set/clear/toggle/popcount, singly linked list CRUD, Floyd's tortoise-and-hare cycle detection, and two-stack queue / two-queue stack adapters.",
          "Expression Parsing Engine (Semester III, Module 6): Built a two-pass Stack calculator that converts parenthesized infix expressions like (5+3)*2-4/2 into postfix (53+2*42/-) and evaluates them to 14.",
          "Hierarchical & Priority Structures (Semester III, Modules 8–10): Constructed binary trees with BFS level-order top/right views and diameter computation, BST insertion/deletion with in-order K-th smallest retrieval, and array-backed Min-Heap / Max-Heap priority structures."
        ],
        technologies: [
          "C++17",
          "C++ Standard Template Library (vector, stack, queue, priority_queue, map)",
          "Custom Pointer-Based Singly Linked Lists & Binary Tree Nodes",
          "Bitwise Operators & Two-Pointer Algorithms"
        ],
        challenges: [
          "Pointer safety in Linked List cycle & intersection detection: Handled edge cases for head/tail deletions and verified O(1) auxiliary space cycle detection using fast and slow pointers.",
          "Operator precedence and associativity in Infix-to-Postfix conversion: Carefully ordered precedence levels (^ > * / > + -) and parenthesis unwinding on the operator stack before postfix evaluation."
        ],
        contributions: [
          "Wrote, compiled, debugged, and verified all 17 C++ programs and documented their step-by-step algorithms and complexity trade-offs."
        ],
        resultsAndLearnings: [
          "Completed 17 verified C++ implementations across linear, non-linear, and priority data structures.",
          "Built strong algorithmic problem-solving habits that directly support backend API optimization and technical assessments."
        ],
        screenshots: [
          {
            src: "/images/projects/cpp_contact_vector.png",
            alt: "C++ Contact Management System using std::vector in Chandru's IDE",
            caption: "Verified IDE output (Chandru · ID: N25C01A0050): Contact Management System using C++ STL Vector."
          },
          {
            src: "/images/projects/cpp_queue_stack_pq.png",
            alt: "C++ Customer Service Simulation using Queue, Stack, and Priority Queue",
            caption: "Verified IDE output (Chandru · ID: N25C01A0050): Customer Service System using Queue, Stack & Priority Queue."
          }
        ],
        links: {
          documentationUrl: "https://drive.google.com/file/d/1LMVPatnq2bEnMqlLg5ys2qyXEV65yFaV/view?usp=drivesdk",
          notebookUrl: "https://drive.google.com/file/d/1u3GVC3_Iltz5h-Yx5HDNrsl1jpIyGoGV/view?usp=drivesdk",
          sourceCode: "https://github.com/cc0109368-max"
        }
      }
    }
  ],
  freelance: {
    roleTitle: "Independent Freelance Developer",
    statusLabel: "Current Professional Status · Independent Practice",
    summary:
      "Alongside my B.Tech in AI & ML, I work as an independent freelance developer building modern web interfaces, full-stack applications, and API-driven workflows. I focus on clear communication, clean component architecture, and practical delivery.",
    services: [
      {
        id: "frontend-web-dev",
        title: "Responsive Website & Frontend Development",
        description:
          "Designing and building mobile-first landing pages, portfolios, and interactive web interfaces with semantic HTML5, modern CSS3, React.js, TypeScript, and Tailwind CSS.",
        deliverables: [
          "Responsive multi-section websites & landing pages",
          "Reusable React.js + TypeScript UI component libraries",
          "Cross-device layout optimization & accessibility compliance"
        ],
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
      },
      {
        id: "fullstack-app-dev",
        title: "Full-Stack Web Application Development",
        description:
          "Developing end-to-end web applications that connect reactive frontend views to structured Node.js and Express.js backend services with JWT authentication.",
        deliverables: [
          "RESTful API design & Express.js route architecture",
          "JWT-based authentication & role-protected workflows",
          "End-to-end frontend-to-backend state synchronization"
        ],
        technologies: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "React.js"]
      },
      {
        id: "database-cloud-integration",
        title: "Database Modeling, API & AI Integration",
        description:
          "Integrating relational databases (PostgreSQL, Supabase, Prisma ORM) and third-party or Generative AI APIs (Gemini API, LLM workflows) with cloud deployment.",
        deliverables: [
          "PostgreSQL & Supabase schema design with Prisma ORM",
          "Gemini API & LLM workflow integration",
          "Continuous deployment on Vercel and Render"
        ],
        technologies: ["PostgreSQL", "Supabase", "Prisma ORM", "Gemini API", "Vercel", "Render"]
      }
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Scope & Architecture",
        description: "Clarify user requirements, data models, API endpoints, and responsive layout structure before writing code."
      },
      {
        step: "02",
        title: "Iterative Engineering",
        description: "Build modular React/TypeScript components and Express/PostgreSQL backend services with clean Git version control."
      },
      {
        step: "03",
        title: "Verification & Handover",
        description: "Test responsive viewports, API error states, and deployment pipelines on Vercel or Render for smooth delivery."
      }
    ],
    editableClientEngagementsNote:
      "Client-specific engagement records are managed via src/data/portfolioData.ts so verified client case studies can be published as NDA/public permissions allow."
  },
  skills: [
    {
      id: "frontend",
      title: "Frontend",
      subtitle: "Responsive interfaces & component architecture",
      skills: [
        { name: "HTML5", context: "Semantic markup, SEO structure & accessible forms" },
        { name: "CSS3", context: "Flexbox, CSS Grid, responsive media queries & transitions" },
        { name: "JavaScript", context: "ES6+, async/await, DOM APIs & event handling" },
        { name: "TypeScript", context: "Typed props, interfaces & maintainable application state" },
        { name: "React.js", context: "Component architecture, hooks & stateful single-page apps" },
        { name: "Tailwind CSS", context: "Utility-first design systems & responsive dark-mode layouts" }
      ]
    },
    {
      id: "backend",
      title: "Backend",
      subtitle: "Server-side logic, APIs & authentication",
      skills: [
        { name: "Node.js", context: "Asynchronous server runtime & modular backend scripts" },
        { name: "Express.js", context: "RESTful routing, middleware pipelines & request validation" },
        { name: "REST APIs", context: "Resource-oriented endpoint design, status codes & JSON schemas" },
        { name: "JWT Authentication", context: "Stateless token auth, protected routes & session security" }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      subtitle: "Relational modeling, queries & ORM workflows",
      skills: [
        { name: "PostgreSQL", context: "Relational schema design, constraints & indexed queries" },
        { name: "SQL", context: "Joins, aggregations, filtering & data manipulation" },
        { name: "Supabase", context: "Managed PostgreSQL backend, auth integration & cloud storage" },
        { name: "Prisma ORM", context: "Type-safe database client, schema migrations & relations" }
      ]
    },
    {
      id: "ai-genai",
      title: "AI & Generative AI",
      subtitle: "Applied LLM pipelines, embeddings & vector retrieval",
      skills: [
        { name: "Python", context: "Data processing, ML workflows, Pandas, NumPy & Scikit-Learn" },
        { name: "Generative AI", context: "Foundation model workflows, synthesis & output validation" },
        { name: "Gemini API integration", context: "google-generativeai SDK, text-embedding-004 & multimodal calls" },
        { name: "Prompt Engineering", context: "System prompts, XML structuring, zero/few-shot & CoT patterns" },
        { name: "LLM Applications", context: "LangChain RetrievalQA chains, Llama-2 GGML & task automation" },
        { name: "RAG Systems", context: "FAISS IndexFlatIP, ChromaDB, Sentence-Transformers & Precision@K evaluation" },
        { name: "AI API Integration", context: "Batched embedding pipelines, rate-limit handling & JSON parsing" }
      ]
    },
    {
      id: "tools",
      title: "Development Tools",
      subtitle: "Version control, IDEs & API testing",
      skills: [
        { name: "Git", context: "Branching workflows, commit hygiene & version tracking" },
        { name: "GitHub", context: "Repository hosting, collaboration & CI/CD triggers" },
        { name: "Antigravity IDE", context: "AI-assisted full-stack engineering & rapid debugging" }
      ]
    },
    {
      id: "deployment",
      title: "Deployment",
      subtitle: "Cloud hosting for frontend & backend services",
      skills: [
        { name: "Vercel", context: "Git-connected frontend builds, preview URLs & edge hosting" },
        { name: "Render", context: "Cloud deployment for Node.js/Express web services & APIs" }
      ]
    }
  ],
  education: {
    degree: "B.Tech — Artificial Intelligence and Machine Learning",
    institution: "B.S. Abdur Rahman Crescent Institute of Science & Technology",
    location: "Vandalur, Chennai, Tamil Nadu, India",
    expectedGraduation: "2029",
    batch: "2025 – 2029",
    currentStanding: "Undergraduate (Semester 3) · Register No: 250211601022",
    coursework: [
      "Data Structures & Algorithms I & II (C++)",
      "Full-Stack Backend Development (Node.js, Express.js, REST APIs, Auth)",
      "Introduction to Web Technologies (HTML5, CSS3, Bootstrap, JS)",
      "Applied Generative AI Development (Prompt Engineering, Embeddings, RAG)",
      "Probability, Statistics & Non-Linear Regression Modeling",
      "Python Programming & Object-Oriented Design"
    ],
    programsAndTraining: [
      {
        title: "NIAT (NxtWave Institute of Advanced Technologies) Applied Tech Track",
        organizer: "NxtWave / Crescent University",
        focus: "Intensive hands-on curriculum in Full-Stack Web Development, Data Structures, and Applied GenAI Masterclasses (Text Embeddings & Vector Search in Practice)."
      },
      {
        title: "5-Day AI Agents Intensive",
        organizer: "Google Events & Kaggle",
        focus: "Explored agentic AI architectures, tool use, whitepapers, and Gemini-powered agent workflows."
      },
      {
        title: "Google Cloud Gen AI Academy 2.0",
        organizer: "Google Cloud & Hack2skill",
        focus: "Hands-on cloud engineering, machine learning, and generative AI skill tracks."
      },
      {
        title: "HackerRank Orchestrate — AI Agent Hackathon",
        organizer: "HackerRank",
        focus: "Participated in 24-hour practical problem-solving and AI agent builder challenges."
      }
    ]
  },
  contact: {
    headline: "Have an opportunity or a project in mind? Let's connect.",
    closingMessage:
      "I am actively looking for Full-Stack Developer, AI / GenAI Developer, and Software Developer internships, as well as freelance web development projects.",
    responseNote:
      "Direct email is the fastest way to reach me. Clicking 'Compose Email' opens your default mail client pre-addressed to chandrux360@gmail.com."
  }
};
