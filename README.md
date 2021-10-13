# Express.Router

An Express router provides a subset of Express methods. To create an instance of one, we invoke the .Router() method on the top-level Express import.

To use a router, we mount it at a certain path using app.use() and pass in the router as the second argument. This router will now be used for all paths that begin with that path segment.
