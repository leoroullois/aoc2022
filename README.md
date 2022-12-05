```
    _       _                 _    ___   __  ____          _
   / \   __| |_   _____ _ __ | |_ / _ \ / _|/ ___|___   __| | ___
  / _ \ / _` \ \ / / _ \ '_ \| __| | | | |_| |   / _ \ / _` |/ _ \
 / ___ \ (_| |\ V /  __/ | | | |_| |_| |  _| |__| (_) | (_| |  __/
/_/   \_\__,_| \_/ \___|_| |_|\__|\___/|_|  \____\___/ \__,_|\___|

 ____   ___ ____  ____
|___ \ / _ \___ \|___ \
  __) | | | |__) | __) |
 / __/| |_| / __/ / __/
|_____|\___/_____|_____|
```

## Bash

Les deux premiers jours sont écrits en **Bash**.
Pour lancer un fichier bash il faut avoir les droits pour l'éxecuter :

```bash
chmod +x day1/script.sh
chmod+x day2/script.sh
```

Et après pour l'éxecution en elle même c'est très simple :

```bash
./day1/script.sh
./day2/script.sh
```

## Typescript

Le reste des challenges est écrit en TypeScript.
Pour éxecuter un fichier typescript, il faut installer ``ts-node`` avec npm :

```bash
npm install -g ts-node
```

Puis pour éxécuter n'importe quel jours :

```
ts-node <day>/index.ts
```

Exemple :

```bash
ts-node day5/index.ts
```
