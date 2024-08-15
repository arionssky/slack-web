## NextJS 13 Web BoilerPlate Template V 0.0.1 by Mezorn LLC

### Features

NextJS App router, TypeScript, TailWind CSS , Mantine

### Гарчиг

1. [Features](#features)
2. [Install](#install)
3. [Styling](#styling)
4. [Folder Structure](#folder-structure)
5. [Data fetching](#data-fetching)
6. [ToolKit](#toolkit)
7. [Meta Data](#meta-data)
8. [Layouts](#layouts)

### Install

1. `git clone git@github.com:mezorn-com/boilerplate-next-web.git`
2. `cd boilerplate-next-web`
3. `cp .env.sample .env` .env file-аа үүсгэнэ/
4. `npm install`
5. `npm run dev`

Default-аар [http://localhost:3000](http://localhost:3000) порт дээр асна.

### Folder Structure

1. `app` folder дотор `global.css` болон үндсэн `page`-үүдийн зохион байгуулалтууд байрлана.

2. `components` folder дотор хөгжүүлэлтэд ашиглах компонент-н кодууд байрлана. nested folder-н нэршлийг жижиг үсгээр бичнэ.

3. `config` folder дотор шаардлагатай үндсэн тохиргоонуудын зохион байгуулалтыг хэрэгжүүлнэ. interceptor, theme гэх мэт...

4. `hooks` folder дотор хөгжүүлэлтэд хэрэгцээтэй hook method-уудыг бичиж өгнө.

5. `lib` folder дотор ерөнхий хэрэгцээт common кодуудыг бичиж өгнө.

6. `provider` folder дотор хөгжүүлэлтэд ашиглагдах `provider`-уудыг байршуулна.

7. `service` folder дотор client эсвэл server талд хийгдэх хүсэлтүүдийн зохицуулалтыг хийнэ.

8. `types` folder дотор type-уудыг зарлана

9. `utils` folder дотор олон газар ашиглагдахуйц util функцуудын хэрэгжүүлэлт байна.

### Styling

1. `app/layout.tsx` дотор import хийсэн style бүх pages болон component дээр ажиллах учраас global style-уудаа энд import хийнэ.

2. `app/layout.tsx` дотор `node_modules`-аас хүссэн style-аа import хийж оруулж ирэх боломжтой учраас хэрэглэж байгаа сангийнхаа style-ийг import хийж оруулж ирнэ.
   Жишээ нь:

   ```js
   import 'rsuite/lib/styles/index.css';
   import 'swiper/swiper.css';

   import '../styles.css';
   ```

   гэх мэт байдлаар.

3. NextJs `.module.css` өргөтгөл ашиглан Component-ын түвшинд style бичих боломжтой. Тиймээс тухайн component дотор `[componentName].module.css` гэж нэрлээд ашиглана. Автоматаар өөрөө unique className өгдөг учраас ижил className өгсөн ч асуудалгүй ажиллана.
   Жишээ нь:
   `MainButton.module.css` file

   ```css
   .error {
     color: white;
     background-color: red;
   }
   ```

   MainButton component

   ```js
   import styles from './MainButton.module.css';

   export function MainButton() {
     return (
       <button
         type='button'
         // Note how the "error" class is accessed as a property on the imported `styles` object.
         className={styles.error}
       >
         Destroy
       </button>
     );
   }
   ```

   Энэ error class бусад error class-тай давхцахгүй ажиллана.

4. Tailwind CSS
   Энэхүү BoilerPlate-д default-аар Tailwind CSS суусан байгаа. `tailwind.config.js` файл дотор тохиргоогоо хийнэ.

   Жишээ нь:

   ```js
   import type { Config } from 'tailwindcss';

   const config: Config = {
     content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
     theme: {
       extend: {
         colors: {
           primary: {
             50: '#ffebe9',
             100: '#fcd6d5',
             200: '#f2aba8',
             300: '#ea7e7a',
             400: '#e25752',
             500: '#de3f39',
             600: '#dd312b',
             700: '#c5231e',
             800: '#b01c1a',
             900: '#9b1013',
           },
         },
       },
     },
     plugins: [],
     corePlugins: {
       preflight: false,
     },
   };
   export default config;
   ```

   `Importing Styles`

   Globals style дээрээ хэрэгцээт tailwind style-уудаа import хийж оруулна.

   Жишээ нь:

   `app/globals.css`

   ```css
   @import './preflight.css';
   <!-- Customized preflight -->

   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   body {
     box-sizing: border-box;
     margin: 0px;
     padding: 0px;
     background-color: black;
   }
   ```

   `Tailwind Class ашиглах жишээ:`

   ```css
   export default function Page() {
     return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
   }
   ```

5. Mantine UI + Tailwind CSS

   Mantine UI library-с өөрт хэрэгцээтэй компонентүүдийг оруулж ирэн хөгжүүлэлтэндээ ашиглах боломжтой. `Mantine` болон `Tailwind` -н өөр хоорондын давхцлыг зохицуулах тохиргоо хийгдсэн байгаа.
   <br/>
   <br/>
   `tailwind.config.ts `-н preflight-г унтраан `app` folder дотор Tailwind-н default preflight тохиргоог хуулж тавин өөр хоорондоо давхардаж буй зарим тохиргоог өөртөө тохируулан customize хийх боломжтой.

### Data fetching

NextJS 13-аас өмнө Data Fetch хийхийн тулд заавал тусгай функцуудыг ашиглах шаардлагатай байсан бол 13-аас эхлэн илүү native болж, тэдгээр функцын шаардлагагүйгээр fetch api ашиглан Data Fetch хийх боломжтой болсон.

1. Fetch with Cached Data
   <br />
   Энэ тохиолдолд build хийх үед ганц удаа хүсэлт дуудан data-гаа fetch хийх ба дахиж дуудахгүйгээр cache-ээсээ уншина.

   ```js
   //This request would be cached until manually invalidated.
   //Similar to 'getStaticProps'
   // 'force-cache' is the default
   fetch(API_URL, { cache: 'force-cache' });
   //Note :- Use this type of fetching for data that does not change often.
   ```

2. Fetch with Dynamic Data
   <br />
   Хуудас ачааллах бүрт Data байнгын шинэчлэгдэж байх шаардлагатай хуудсан дээр ашиглахад тохиромжтой
   Энэ тохиолдолд `cache` параметр лүү `no-store` утгыг дамжуулснаар хуудас ачаалах болгонд шинэ хүсэлт дуудагдана.

   ```js
   // This request should be refetched on every request.
   // Similar to 'getServerSideProps'
   fetch(API_URL, { cache: 'no-store' });

   //Note :- Use this for data that needs to be updated at each page load.
   ```

3. Fetch with Revalidating Data
   <br/>
   Энэ хэрэглээ нь ерөнхийдөө дээрх 2 аргын нийлбэр гэхэд болно. Хугацаа тохируулах боломжтой ба, энэхүү хугацаа нь Data дахин fetch хийх хугацаа юм.
   <br/>
   Доорх жишээг харвал 10 секунд тутамд fetch хийж байгаа ба, байнга хүсэлт илгээхгүй бөгөөд тохируулсан хугацаа дуусаагүй тохиололд cache-ээсээ унших юм.

   ```js
   // This request should be cached with a lifetime of 10 seconds.
   // Similar to 'getStaticProps' with the 'revalidate' option.
   fetch(API_URL, { next: { revalidate: 10 } });
   //Use this for the case when we have data that changes, but now very often.
   ```

### ToolKit

1. Next Link. `a` tag-н оронд хуудас шилжихэд ашиглах NextJS-н компонент.

```js
// Next.js 13 - Easier, a time saver, and a clean code

import Link from 'next/link';

<Link href='/about'>About</Link>;
```

2. Next Image. Энгийн `img` tag ашигласнаас илүү хурдан илүү optimized.

   ```js
   import Image from 'next/image';

   export default function Page() {
     return (
       <Image
         src='/profile.png'
         width={500}
         height={500}
         alt='Picture of the author'
       />
     );
   }
   ```

3. Next Font.

   @next/font нь зөвхөн Google Fonts дээр ажиллах ба бусад font provider-т ажиллахгүй. Хэрэв өөр ямар нэгэн фонт ашиглах бол local орчинд татаж суулган тохируулж болно.

   - Google fonts руу нэмэлт хүсэлт дуудах шаардлагагүй.
   - Google fonts ашиглах бол local орчинд татаж суулгах,CDN ашиглах шаардлагагүй
   - Font Optimization

### Meta Data

Тухайн вебийн ерөнхий статик Meta Data-г `layout.tsx` дээр доорх байдлаар тодорхойлж өгнө.

```js
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '...',
  description: '...',
};

export default function Page() {}
```

Динамик хуудсын хувьд `generateMetadata` функцыг ашиглан шаардлагатай динамик утгуудыг fetch хийн ашиглана.

```js
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string },
}) {
  const blog = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return {
    title: blog.title,
    description: blog.body,
  };
}
```

### Layouts

app folder дотор, үндсэн layout болон хуудсуудын error,loading,not-found state-үүдийг зохицуулах боломжтой ба ямар нэгэн онцгой тохиолдолд хуудсуудыг nested маягаар зохион байгуулснаар тухайн хуудас бүрт өөрийн гэсэн ui state-үүдийг тусгайлан бичиж тохируулж болно.

Жишээлбэл:

```js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href='/'>Navigate to /</Link>
      </p>
    </div>
  );
}
```

Дээрх кодыг `not-found.tsx` гэсэн нэршилээр `app` root дээр бичиж өгснөөр ямар нэгэн буруу path руу хандсан тохиолдолд харагдана.

Харин доорх жишээн дээр `error.tsx`-г харууллаа. `error.tsx` нь заавал Client Component байх шаардлагатай.

```js
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

### More Resources:

- [NextJS Documentation](https://nextjs.org/docs)
- [NextJS App Router Documentation](https://nextjs.org/docs/app)
- [Tailwind Documentation](https://tailwindcss.com/)
- [Mantine Documentation](https://mantine.dev/)
