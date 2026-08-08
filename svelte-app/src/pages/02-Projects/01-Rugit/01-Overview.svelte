<script>
    import ProjectOverview from "../../../lib/ProjectOverview.svelte";
    import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

    const data = {
        title: "Rugit",
        subtitle: "Custom Git Version Control Engine",
        tags: ["Rust", "Reqwest", "Flate2", "SHA-1"],
        icon: faCodeBranch,
        description: [
            "A from-scratch reimplementation of Git's core version control internals in Rust, built for learning how Git actually works.",
            "rugit implements Git's low-level data structures ('plumbing') rather than its user-facing commands ('porcelain'). This includes object storage and hashing, binary index parsing, and the smart HTTP wire protocol."
        ],
        features: [
            { title: "Object Storage", desc: "Hashes and stores blob, tree, and commit objects using SHA-1, with Zlib compression matching Git's on-disk format." },
            { title: "Binary Index Parser", desc: "Reads and writes the .git/index file format, including the DIRC signature, version header, per-entry stat data, and fan-out padding." },
            { title: "Smart HTTP Protocol", desc: "Implements git-receive-pack capability negotiation and sideband multiplexing to push to remote repositories over HTTP." },
            { title: "Packfile Generation", desc: "Traverses the commit graph to generate delta-compressed packfiles for transmission." },
            { title: "Branch Handling", desc: "Implements branch refs and HEAD resolution, including branch creation and switching." }
        ]
    };
</script>

<ProjectOverview {...data} />
