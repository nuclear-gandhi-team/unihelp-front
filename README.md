This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Добрий день, Вас вітає команда Nuclear Gandhi. 
У нас є організація ([nuclear-gandhi-team](https://github.com/nuclear-gandhi-team)) для всіх хакатонів, де ми брали участь.
Наша команда зазвичай дещо більша, але на хакатоні від int20h брали участь лише 4 учасники:

1. #### Frontend [(betabid-front)](https://github.com/nuclear-gandhi-team/betabid-front)
    - Дмитро Буяло ([Buiama](https://github.com/Buiama));
    - Даниіл Бутов ([HJyup](https://github.com/HJyup));
2. #### Backend [(betabid-back)](https://github.com/nuclear-gandhi-team/betabid-back)
    - Денис Маланічев ([Denys Malanichev](https://github.com/DenysMalanichev));
    - Божена Дяків ([bozhenkaaa](https://github.com/bozhenkaaa))

Майже для всіх дій необхідна авторизація користувача.

Backend на ASP.NET
Frontend на React+TypeScript


Посилання на деплой фронтенду: unihelp-front.vercel.app
Посилання на свагер бекенду: https://unihelpback.azurewebsites.net/swagger/index.html

основні сторінки:
unihelp-front.vercel.app
unihelp-front.vercel.app/auth/register-teacher
unihelp-front.vercel.app/auth/register-student
unihelp-front.vercel.app/auth/login
unihelp-front.vercel.app/main/teacher
unihelp-front.vercel.app/main/student
unihelp-front.vercel.app/settings
unihelp-front.vercel.app/courses/student
unihelp-front.vercel.app/courses/teacher
unihelp-front.vercel.app/task/1
unihelp-front.vercel.app/test/create


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# UniHelp

This is backend part of UniHelp online auction web application.

Fill free to check our deployed [Web API](https://unihelpback.azurewebsites.net/swagger/index.html)

API base path is https://unihelpback.azurewebsites.net/api/

# Technologies used:
- ASP.NET Core
- EF Core
- MS SQL Server
- Identity framework

N-Layered architecture was used, so the Solution is divided into 4 projects
- Betabid.Application
- Betabid.Domain
- Betabid.Persistence
- Betabid.WebAPI

Deployed to Azure.

