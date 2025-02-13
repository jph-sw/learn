---
title: Thema VLANs
pubDate: 2025-02-13
description: "VLANs"
---

# VLANs

**Ausgangssituation:**
Wasserstoff GmbH hat ein (relativ) großes Multi-Schicht Netzwerk.

**Netzwerkverhalten:**

|1 Subnetz|Subnetting|VLAN|
|---|---|---|
|- alle sehen alle ressourcen|+ Ressourcen können spezifisch zugeordnet werden|+ bessere Netzwerksicherheit|
|- hoher traffic|+ vorhandene IP-Adressbereiche können sinnvoll genutzt werden|+ traffic wird vermindert (kleinere broadcast domäne)|
|+ Einfache Verwaltung|- verwaltung ist schwieriger|+ clients können mehreren vlans zugeordnet werden (gemeinsame ressourcen)|
|+ Einfache Skalierung|- skalierung ist erschwert|- höherer aufwand|
