# Twitsy-Program

## Frontend Application
> `http://localhost:3000/` [Signup Component]

![image](https://user-images.githubusercontent.com/91736791/236663938-842889ab-d614-4dab-b86b-5c50a70c9829.png)
---
> `http://localhost:3000/` [Login Component]

![image](https://user-images.githubusercontent.com/91736791/236735160-251968b6-92f0-448e-8806-7573f0fb7113.png)
---
> `http://localhost:3000/app` [Landing page after Signup/Login]

![image](https://user-images.githubusercontent.com/91736791/236735296-f6861654-80c5-4eb3-b4e9-01cc91007e78.png)
---
> `http://localhost:3000/app/home` [Home page]

![image](https://user-images.githubusercontent.com/91736791/236664303-8f85a8fd-34fc-443c-a2da-18d7130647fe.png)
---
> `http://localhost:3000/app/mytweets` [My Tweets page]

![image](https://user-images.githubusercontent.com/91736791/236664325-2b10350c-90da-4e26-be6e-e457b6983520.png)
---
> `http://localhost:3000/app/mytweets` [Create Tweet button clicked]

![image](https://user-images.githubusercontent.com/91736791/236664240-e940ff42-0522-45ca-ad11-52738f6a5bc1.png)
---

## Backend API endpoints

#### Login user

```
  POST /login
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `useremail` | `string` | **Required** |
| `password`  | `string` | **Required** |

---
#### Register user

```
  POST /register
```

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| `username` | `string` | **Required** |
| `useremail`| `string` | **Required** |
| `password `| `string` | **Required** |

---
#### Get all tweets

```
  GET /alltweets
```
---
#### Get specific user tweets

```
  POST /mytweets
```

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| `useremail`| `string` | **Required** |

---
#### Create tweet

```
  POST /dotweet
```

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| `useremail`| `string` | **Required** |
| `content`  | `string` | **Required** |

---

## 🔗 Links

>###  Vinay Gupta
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinaygupta777/)

>###  Nitesh raj
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raj-nitesh/)

