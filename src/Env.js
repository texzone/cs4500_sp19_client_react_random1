var MIDDLE_TIER_URL = (process.env.NODE_ENV === 'development' ?
        "http://localhost:8080" :
        "https://heroku...")

export default MIDDLE_TIER_URL 
