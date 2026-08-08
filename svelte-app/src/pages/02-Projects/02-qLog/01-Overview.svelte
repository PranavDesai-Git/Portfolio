<script>
    import ProjectOverview from "../../../lib/ProjectOverview.svelte";
    import { faTerminal } from "@fortawesome/free-solid-svg-icons";

    const data = {
        title: "qLog",
        subtitle: "Local AI-Driven Project Management TUI",
        tags: ["Go", "Bubble Tea", "Lipgloss", "Ollama"],
        icon: faTerminal,
        description: [
            "qLog is a terminal user interface built for planning and managing projects using locally hosted AI. It was born out of the frustration of constantly having to re-explain project context to web-based chatbots.",
            "Instead of losing hours describing your project to an AI that will eventually forget it, qLog automates the process of maintaining a persistent project state. It writes the project context into a file, which is then seamlessly passed back to the AI for future interactions, ensuring perfect continuity."
        ],
        features: [
            { title: "Local AI Integration", desc: "Connects with local language models via Ollama to generate summaries and manage tasks without relying on expensive API calls." },
            { title: "Automated Context", desc: "Maintains an ongoing contextual file of your project that can be passed to any chatbot, ensuring it never forgets your architecture or history." },
            { title: "TUI Interface", desc: "Built entirely in the terminal using Go's Bubble Tea framework for maximum developer productivity without ever leaving the command line." },
            { title: "Agenda Generation", desc: "Automatically generates daily agendas and project summaries so you never lose track of where you left off." }
        ]
    };
</script>

<ProjectOverview {...data} />
