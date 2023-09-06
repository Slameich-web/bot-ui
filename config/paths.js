const path = require("path");

const appRoot = path.resolve(__dirname, "../")
const appEntry = path.resolve(appRoot, "src/index.tsx")
const appBuild = path.resolve(appRoot, "build")
const appPublicPath = path.resolve(appRoot, "public")
const appIndexPath = path.resolve(appPublicPath, "index.html")

module.exports = {
    appRoot: appRoot,
    appEntry: appEntry,
    appBuild: appBuild,
    appPublicPath: appPublicPath,
    appIndexPath: appIndexPath,
}
