---
id: 2
---

# MUST set correct headers

The messages in an end to end encrypted kafka topic must contain the following heaeders:

* ce_e2eeiv
* ce_e2eekeyname
* ce_e2eekeyversion

The headers are described in the following sections.

## ce_e2eeiv header

The `ce_e2eeiv` header contains the initialization vector used to encrypt the message.
It MUST a base64 encoded string.
The initialization vector is a random value that is used to ensure that the same message encrypted with the same key will 
result in different ciphertexts. The initialization vector is a random value that is used to ensure that the same message 
encrypted with the same key will result in different ciphertexts.



## ce_e2eekeyname header

The `ce_e2eekeyname` header contains the name of the key that was used to encrypt the message. 
The name is referenced in the vault.

## ce_e2eekeyversion header

The `ce_e2eekeyversion` header contains the version of the key that was used to encrypt the message. The version reflects
the version of the key in the vault.