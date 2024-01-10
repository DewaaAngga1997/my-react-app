import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-semibold">Oops!</h1>
            <p className="my-5 text-xl">Maaf, Halaman yang anda cari tidak ditemukan.</p>
            <p className="text-xl">
                {error.statusText || error.message}
            </p>
        </div>
    );
}

export default ErrorPage