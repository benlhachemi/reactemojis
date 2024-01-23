

# Getting Started

Welcome to **React Emojis!** This guide will help you get started with the installation process and provide a step-by-step walkthrough on how to use **React Emojis** in your React projects.

## How to install

### 🚀 Receive GitHub Repository Access
After a successful payment, you'll promptly receive an invitation to the React Emojis GitHub repository. 
:::info

In case you encounter any issues or don't receive the invitation, please contact us at support@reactemojis.com, and we'll assist you promptly.

:::





### 📦 Clone the Package to Your React Project
Clone the React Emojis package to your root React project using the following command:
```bash
git clone https://github.com/benlhachemi/reactemojis
```
Once completed, you should see a new folder named 'react-emojis' at the root of your project.

![Example banner](https://i.imgur.com/bFqqCVk.png)


### ⚙️ Install Dependencies
To ensure smooth functionality, install the dependencies by running the following command:
```bash
npm install lottie-react
```
:::note

For optimal deployment, it's recommended to install 'lottie-react' in the root package.json of your entire app rather than within the 'react-emojis' folder. This helps prevent dependency issues during deployment.

:::

### 🎉 Ready to Use
With the installation and setup completed, you are now ready to use the React Emojis package. Simply import the package into your React project:
```tsx
import ReactEmojis from "@/react-emojis";
```


## How to use
Add expressive emojis to your project effortlessly. Use the following code to include an emoji in your React component:
```tsx
<ReactEmojis emoji='😍' />
```


### Props Table

| Prop         | Required | Type    | Description                                              |
| ------------ | -------- | ------- | -------------------------------------------------------- |
| **emoji**    | Required | [emoji]([/docs/list-of-emojis](https://docs.reactemojis.com/docs/list-of-emojis))   | Paste the emoji you want to use. [Click here]([/docs/list-of-emojis](https://docs.reactemojis.com/docs/list-of-emojis)) to see the list of supported emojis.                     |
| **emojiStyle** | Optional | string  | Choose from values 1, 2, 3 to determine the style of emoji variation. |
| **style**    | Optional | JSON    | Add CSS styles.                                          |
| **className**| Optional | string  | Add a classname for further customization.               |

:::tip

For TypeScript support and a handy list of emojis, simply invoke IntelliSense completion in Visual Studio Code by pressing CTRL + Space. This will provide you with a convenient list of available emojis to choose from.
![Example banner](https://i.imgur.com/BmoEZZj.png)

:::


For additional details and advanced features, refer to our comprehensive documentation. Happy coding! 🚀
