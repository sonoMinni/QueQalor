<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style-regster.css">
    <title>Que Qalor - Login</title>
    <script src="../script-register.js"></script>
</head>
<body>
    <section class="page">
        <div class="titolo">
            <h1>
                <img src="../imgs/logo.png" class="logo">
            </h1>
            <p class="title">Registrati</p>
            <p class="obb">Tutti i campi sono obbligatori*</p>
        </div>
        <div class="login">
            <form method="POST" class="form" action="back-end-register.php" onsubmit="return validate();">
                <div class="inputs">
                <input name="name" type="text" class="nome" placeholder="Nome">
                <input name="surname" type="text" class="cognome" placeholder="Cognome">
                <input name="email" type="text" class="email" placeholder="Email">
                <input name="number" type="text" class="telefono" placeholder="Numero di Telefono">
                <input name="pw" type="password" class="pw" placeholder="Password">
                <input name="confirmPW" type="password" class="confirmPW" placeholder="Conferma Password">
                </div>
                <button name="registerBtn"type="submit" class="btn">registrati</button>
            </form>
        </div>
        <div class="access">
            <p class="accesso">Hai già un account?</p>
            <a href="gestionale.html" class="accedi">Accedi</a>
        </div>
        <div class="error hidden">
            <span class="avviso hidden">Riempi correttamente i campi</span>
            <span class="avviso2 hidden">Le password non coincidono</span>
            <span class="avviso3 hidden">Inserisci una mail valida</span>
            <span class="avviso4 hidden">Inserisci una password valida</span>
            <span class="avviso5 hidden">Inserisci un numero di telefono valido</span>
        </div>

        <div class="privacy">
            By clicking “Continue with Email” above, you acknowledge that you<br> have read and understood, and agree to Que Qalor’s Terms &<br> Conditions and Privacy Policy.
        </div>
        
    </section>
</body>
</html>