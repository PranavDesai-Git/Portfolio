<script>
    import ProjectOverview from "../../../lib/ProjectOverview.svelte";
    import { faLeaf } from "@fortawesome/free-solid-svg-icons";

    const data = {
        title: "WIMP",
        subtitle: "What Is My Plant?!",
        tags: ["Kotlin", "Jetpack Compose", "Llama.cpp", "RAG"],
        icon: faLeaf,
        description: [
            "WIMP (What Is My Plant?!) is a native Android application built with Jetpack Compose that helps you identify and care for your plants. It was designed as a lightweight, locally hosted alternative to massive, compute-heavy AI models.",
            "Instead of relying on paid APIs or cloud infrastructure, WIMP leverages on-device AI. It uses the Pl@nt Net API to identify the plant, downloads its Wikipedia page, and runs a local Retrieval-Augmented Generation (RAG) pipeline against a 1B parameter Llama model right on your phone."
        ],
        features: [
            { title: "Vision Recognition", desc: "Detects the exact plant species from a photo taken on your phone using the Pl@nt Net API." },
            { title: "Knowledge Retrieval", desc: "Automatically downloads the relevant Wikipedia page for the detected plant and parses it into a local text database." },
            { title: "Local RAG Pipeline", desc: "Splits the Wikipedia page into chunks and uses Retrieval-Augmented Generation to provide hyper-specific context to the language model." },
            { title: "On-Device AI", desc: "Runs Llama-3.2-1B-Instruct completely locally via Llama.cpp, allowing you to perform Q&A about plant care entirely offline." },
            { title: "Widgets & Reminders", desc: "Integrates with Android to set care reminders and homescreen widgets to ensure you water your plant on time." }
        ]
    };
</script>

<ProjectOverview {...data} />
