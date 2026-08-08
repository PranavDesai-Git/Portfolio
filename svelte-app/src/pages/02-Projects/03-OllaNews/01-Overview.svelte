<script>
    import ProjectOverview from "../../../lib/ProjectOverview.svelte";
    import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

    const data = {
        title: "OllaNews",
        subtitle: "Local AI News Aggregator",
        tags: ["Python", "Flask", "Ollama", "BeautifulSoup"],
        icon: faMicrochip,
        description: [
            "OllaNews is a news aggregation and summarization application designed to process current events entirely through a local AI workflow. It focuses on reducing information density by converting long-form articles into single-paragraph digests without relying on external cloud-based AI APIs.",
            "The architecture consists of a modular Python backend using Flask. It includes a Data Acquisition layer to parse Google News links, a Content Extraction layer to scrape full text, and an Intelligence layer running Gemma 3 locally to stream summaries."
        ],
        features: [
            { title: "News Decoding", desc: "Queries news entries based on user topics and resolves Google News' encrypted redirect links back to their original source URLs." },
            { title: "Content Extraction", desc: "Scrapes full-text content from resolved URLs using trafilatura, with fallback mechanisms for RSS snippets." },
            { title: "Local Intelligence", desc: "Integrates with Ollama to run the gemma3:1b model entirely on-device, ensuring complete privacy and zero API costs." },
            { title: "Streaming Summaries", desc: "Sends the extracted text to the local AI and streams the output, allowing the interface to display the digest in real-time as it is generated." },
            { title: "Persistence", desc: "Users can archive specific articles and their generated summaries to local JSON storage for fast retrieval across different sessions." }
        ]
    };
</script>

<ProjectOverview {...data} />
