
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 16
My Partner's Key: 3

Our initial shared key: 16

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|     xy          |      hi         | 16  |
|    khb          |     hey         | 3   |
|    xhk          |     hru         | 16  |
|    jrrg         |    good         |  3  |
|    cu jee       |  me too         | 16  |
|     bdb         |     yay         |  3  |

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

e2Zivi

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits):
 
01100101 00110010 01011010 01101001 01110110 01101001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Grace]
    Destination: [Luka]  
    Sequence: 1/3
    Data: [01100101] [00110010]
    =========
    Packet 2:

    Source: [Grace]
    Destination: [Luka]
    Sequence: 2/3 
    Data: [01011010] [01101001]
    =========
    Packet 3:

    Source: [Grace]
    Destination: [Luka]
    Sequence: 3/3
    Data: [01110110] [01101001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

The difference between symmetric and asymmetric encryption is that symmetric encryption uses a single shared key for both encryption and decryption while asymmetric encrytion uses a public key for encryption and a private key for decryption. In this simulation we used asymmetric encryption in the first portion to decipher the messages sent through the terminal/github. Symmetric encryption was used when we sent messages through google docs using the caeser cipher. We used our shared keys to decrypt the messages we sent to each other.

- Why is it important that this protocol uses a new key for each message?

It's important that this protocol uses a new key for each message so that, if an "adversary in the middle" gets ahold of one of the keys, they can't decrypt the rest of the messages.

- Why is it important that you never share your secret key?

It's important to never share your secret key because it could give someone access to very personal/sensitive information such as messages by being able to decrypt it.

- In the transport layer, do these messages use TCP or UDP? Why?

In the transport layer, these messages use TCP because it's more secure and ensures arrival in the correct order and no errors. 

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.

In the internet layer, the packets are routed across different networks to reach their destination using their IP address. In the link layer, it takes packets from the internet layer and turns them into frames by adding a header and trailer for transmission over a local network. It then transfer the data to the reciever.

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?

Even if the adversary in the middle can't read the contents of the message, they can see still other information like who is communicating with whom and when they sent the messages. They can also see ip addresses as well as the header of the packets.
