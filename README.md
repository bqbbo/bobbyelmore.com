# bobbyelmore.com

Personal website.

To configure the backend locally, copy `backend/.env.example` to `backend/.env` and set `APPLICATION_PORT` as needed. The backend loads that file automatically through dotenv.

Copy `frontend/.env.example` to `frontend/.env` and set `BACKEND_URL` to the backend address. Use `http://localhost:<port>` locally or the backend service name and port when running with Docker, such as `http://backend:3000`.
