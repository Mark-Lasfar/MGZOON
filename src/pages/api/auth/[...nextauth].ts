// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook"
 




// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
    // Facebook({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET
// });


// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [Facebook],
// })




// import NextAuth from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});
