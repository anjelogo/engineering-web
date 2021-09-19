import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'

passport.use(
	new Strategy({
		clientID: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    callbackURL: "http://www.example.com/auth/google/callback"
  }, (accessToken, refreshToken, profile, cb) => {
    cb()
  }
	)
)

export default passport