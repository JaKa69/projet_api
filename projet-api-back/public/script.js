const API_URL = "http://localhost:8080/api";

let jwtToken = null;

// -------- LOGIN ADMIN --------
const loginForm = document.getElementById("login-form");
const loginStatus = document.getElementById("login-status");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.token){
            jwtToken = data.token;
            loginStatus.textContent = "Connecté !";
            loginStatus.className = "connected";
            loadAllData();
        } else {
            loginStatus.textContent = "Erreur login";
            loginStatus.className = "error";
        }
    })
    .catch(() => {
        loginStatus.textContent = "Erreur login";
        loginStatus.className = "error";
    });
});

// -------- STATUT API --------
fetch(`${API_URL}`)
    .then(res => res.text())
    .then((res) => {
        const status = document.getElementById("api-status");
        status.textContent = "API connectée et opérationnelle, " +res;
        status.className = "connected";
    })
    .catch(() => {
        const status = document.getElementById("api-status");
        status.textContent = "API indisponible";
        status.className = "error";
    });

// -------- FONCTION GENERIQUE --------
function loadData(endpoint, elementId, formatter, auth=false) {
    fetch(`${API_URL}/${endpoint}`, auth ? { headers: { Authorization: `Bearer ${jwtToken}` } } : {})
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById(elementId);
            list.innerHTML = "";
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = formatter(item);
                list.appendChild(li);
            });
        })
        .catch(err => console.error(`Erreur ${endpoint}`, err));
}

// -------- CHARGEMENT DES DONNÉES --------
function loadAllData() {
    // Catégories (publiques)
    loadData("categories", "categories-list", c => c.nom);

    // Composants (publiques)
    loadData("components", "components-list", c =>
        `${c.titre} | ${c.marque || "N/A"} | ${c.prix || 0} €`
    );

    // Marchands (publiques)
    loadData("merchants", "merchants-list", m =>
        `${m.nom} | ${m.url || "N/A"}`
    );

    // Prix (publiques)
    loadData("prices/component/1", "prices-list", p =>
        `Composant : ${p.component?.titre || "N/A"} | Marchand : ${p.merchant?.nom || "N/A"} | ${p.prix || 0} €`
    );

    // Configurations (JWT requis)
    loadData("configurations", "configurations-list", c =>
        `Configuration de ${c.user?.email || "inconnu"} | Total : ${c.total || 0} €`, true
    );

    // Utilisateurs (JWT requis)
    loadData("auth/users", "users-list", u =>
        `${u.email} | Rôle : ${u.role || "N/A"}`, true
    );
}