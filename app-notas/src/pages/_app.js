import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}





// import 'labnotes/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }// import './App.css';
// import React from 'react';
// import Title from './componentes/title';


// function App() {
//   return(
//     <div className='App'>
//     <div>
//     <Title />
//     </div>
//     </div>
//   );
// }

// export default App;



















// // import '@/styles/globals.css';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import '../style/style.css';
// // ejemplo.
// import login from  '../components/login/LogIn';

/* invst function MyApp({ Component, pageProps }) {
  const router = useRouter();
*/

// return (
 
//     <div className="container">
//       <nav>
//         <ul>
//           <li>
//             <Link href="/">
//               <a>Log In</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/categories">
//               <a>Categories</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/menu">
//               <a>Menu</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/kitchen">
//               <a>Kitchen Order</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/orders">
//               <a>Order Ready</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/userlist">
//               <a>User List</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/productlist">
//               <a>Product List</a>
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       <Component {...pageProps} />

//       <footer>
//         <p>&copy; 2023 Next.js Restaurant App</p>
//       </footer>
//     </div>
//   );


// function App() {
//   const router = useRouter();

//   return (
//     <div>
//       <button onClick={() => router.push('/')}>Go to Log In page</button>
//       <button onClick={() => router.push('/categories')}>Go to Categories page</button>
//       <button onClick={() => router.push('/menu')}>Go to Menu page</button>
//       <button onClick={() => router.push('/kitchen')}>Go to Kitchen Order page</button>
//       <button onClick={() => router.push('/orders')}>Go to Order Ready page</button>
//       <button onClick={() => router.push('/userlist')}>Go to User List page</button>
//       <button onClick={() => router.push('/productlist')}>Go to Product List page</button>

//       <Switch>
//         <Route path="/" exact>
//           <LogIn />
//         </Route>
//         <Route path="/categories">
//           <Categories />
//         </Route>
//         <Route path="/menu">
//           <Menu />
//         </Route>
//         <Route path="/kitchen">
//           <KitchenOrder />
//         </Route>
//         <Route path="/orders">
//           <OrderReady />
//         </Route>
//         <Route path="/userlist">
//           <UserList />
//         </Route>
//         <Route path="/productlist">
//           <ProductList />
//         </Route>
//         <Route>
//           <NotFound />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default MyApp;








// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


