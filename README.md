# Sec-Repo Central — Security & Pentesting Learning Hub

A centralized dashboard for organizing personal cybersecurity learning repositories, red teaming toolkits, AI reverse engineering plugins, and defensive SIEM resources.

---

## 🛡️ Security Lab Setup & Safe Usage Tutorial

When working with penetration testing, red teaming, OSINT, and security research tools, safety and environmental isolation are paramount. **Never run offensive or unverified security tools directly on your main host/workstation.**

### Phase 1: Setting Up Your Isolated Lab Environment
1. **Virtualization**: Install **VirtualBox** or **VMware Workstation** on your PC.
2. **Primary Testing OS**: Set up a **Kali Linux** or **Parrot OS** Virtual Machine (VM). This provides pre-configured security packages and an isolated network sandbox.
3. **Network Isolation**: Configure your VM's network adapter to **NAT Network** or **Host-Only Adapter** depending on whether you are practicing internet reconnaissance or local exploit development.

---

### Phase 2: Categorized Tool Usage Guide

#### 1. Reference & "Awesome Lists" (Study & Research)
* *Examples:* `Awesome-Cellular-Hacking`, `Awesome-Blackhat-Tools`, `Kali-Linux` guides, `sharetrace`.
* **How to Use:** 
  - These are curated collections of documentation, attack surfaces, and methodology references.
  - **Action:** Read through their `README.md` files to understand tool parameters, wireless protocols (4G/5G/Wi-Fi), and recon techniques without downloading heavy binaries.

#### 2. Python & CLI Security Tools (Virtual Environment Sandbox)
* *Examples:* `osint_toolkit`, `dockerscan`, `RedTeam-Tools`, `strix`.
* **How to Use:**
  - Always run these inside an isolated VM or using a Python Virtual Environment (`venv`) to prevent dependency clashes:
  ```bash
  # Clone the tool inside your Kali Linux VM
  git clone https://github.com/dev-lu/osint_toolkit
  cd osint_toolkit

  # Create and activate virtual environment
  python3 -m venv venv
  source venv/bin/activate

  # Install dependencies safely
  pip install -r requirements.txt
  ```

#### 3. AI & Reversing Plugins (Ghidra & LLMs)
* *Examples:* `GhidraGPT`, `T3MP3ST`.
* **How to Use:**
  - **GhidraGPT:** Install as an extension/plugin inside the **Ghidra** reverse engineering suite to leverage LLM-assisted binary code analysis.
  - Ensure API keys (if required for AI inference) are stored securely in environment variables (`.env`) and never hardcoded into repositories.

#### 4. Enterprise SIEM & Monitoring Distributions
* *Examples:* `securityonion`.
* **How to Use:**
  - Security Onion is a full Linux distribution. Deploy it as a dedicated VM with at least 4GB–8GB RAM and dual network interfaces (Management + Monitor tap) for full enterprise threat hunting and packet capture (PCAP) analysis.

---

## Getting Started with the Web App Dashboard

Run the development server locally:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
