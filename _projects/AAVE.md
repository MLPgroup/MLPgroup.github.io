---
title: Language Identification

#notitle: true

description: |
  The anatomy of the language identification problem applied to African-American Vernacular English

people:
  - emma

layout: project
#image: /img/MTDE-project/bert.jpg
last-updated: 2022-12-18
---

<!-- ## Classification of mathematical tokens in technical literature -->

#### Problem

We review the language identification problem in the context of classifying African-American Vernacular English (AAVE). Previous works have noted a discrepancy between performance on tweets authored by White-American Twitter users and tweets authored by African-American Twitter users in popular language identification models, especially when the tweets are shorter in length. To explain this phenomenon, this work demonstrates that language identification fundamentally relies on the presence of unique n-grams. From this, it can be concluded that the performance gap between White-Aligned English and AAVE is due to the lack of unique n-grams that can characterize AAVE from poor feature extraction or a lack of diversity in the training data. From these findings, this work introduces and demonstrates the efficacy of two simple yet accurate solutions: mining unique n-gram features and including dialectal English in the training data. These solutions mitigate the accuracy gap between White-Aligned English and AAVE that some popular language identification software have on shorter inputs, as well as boasting competitive accuracy on longer inputs. Mining for unique features and including a more diverse dataset can improve the language identification accuracy disparity on short length sequences by (6%) and (9.8%) respectively.
