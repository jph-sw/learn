---
title: "Relationen"
description: ""
pubDate: 2024-08-29
---

# Relationen

## 1)

![](https://www.plantuml.com/plantuml/png/SoWkIImgISv8pUFYIiqhoIofL0XABCrLgEPI03FyYXHiRB9JA-tiW08-YUcfGCgzwF2sm_DJkMfXEhmJSrEB4i5wKDGx9PPc9MOK0La1cHMfEK0DHQavYIMP-Nd56Pa52Xc99GhLG44ki8swXheW4IuW1h6XXd9nSJcavgM070W0)

## 2)

![](https://www.plantuml.com/plantuml/png/JOwn2iCm34HtVOL_m4Ft4B9rA6HeeRkQ73ZKLeej3w7qtskROhgTxdIFcv9orCL1Y22wwM5kYylmYEPDfX-IGoZMC3nnZ6C9xdiK3YXgviKr-Uc8Y-UKq01Npc7-BvxnOEIrlKTurcsNvBQNSQobKTm-m8gjBjN4dkmFIpH1rZhv2m00)


<details>
  <summary>Code</summary>

  ```c
  @startchen

  entity Schueler {
    Schuelernummer <<key>>
    Vorname
    Nachname
  }

  entity Klasse {
    RaumNr <<key>>
    Gebaeude
  }

  relationship hat {
  }

  Schueler -n- hat
  hat -1- Klasse

  @endchen
  ```
</details>

## 3)

![](https://www.plantuml.com/plantuml/png/LOz1gWCX38RtEOKNy0R3CFi7itdGlTX0f6EcnBWOIkzU8sBfxZT-tw_PYWRHICW0o9hqSl-HAXuexWLk7hZct4RByi1hNTl5xHGE6LlQGwGUtxFYhqenlOVzgut1W0MFeEdaGkdfAAWPl-_1A31wVikpDnhCyDbt1613ljiQ7m00)

<details>
  <summary>Code</summary>

  ```
  @startchen

  entity Schueler {
    Schuelernummer <<key>>
    Vorname
    Nachname
  }

  entity Kurs {
    KursNr <<key>>
    KursName
  }

  relationship hat {
   Schuelernummer
   KursNr
  }

  Schueler -n- hat
  hat -m- Kurs

  @endchen
  ```
</details>
