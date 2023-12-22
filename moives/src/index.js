import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";

import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpComingPage from "./pages/upComingPage";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchPage from "./pages/mustWatchPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import PopularPage from "./pages/popularPage";
import TopRatedPage from "./pages/topRatedPage";
import LoginPage from "./pages/LoginPage";
import ActorPage from "./pages/actorPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader/>
                <AuthContextProvider>
                    <MoviesContextProvider>

                        <Routes>

                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/signup" element={<SignUpPage/>}/>
                            <Route element={<ProtectedRoutes/>}>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/movies/favorites" element={<FavoriteMoviesPage/>}/>
                                <Route path="/reviews/:id" element={<MovieReviewPage/>}/>
                                <Route path="/movies/:id" element={<MoviePage/>}/>
                                <Route path="/movies/upcoming" element={<UpComingPage/>}/>
                                <Route path="/reviews/form" element={<AddMovieReviewPage/>}/>
                                <Route path="/movies/mustwatch" element={<MustWatchPage/>}/>
                                <Route path="/movies/now" element={<NowPlayingPage/>}/>
                                <Route path="/movies/popular" element={<PopularPage/>}/>
                                <Route path="/movies/toprated" element={<TopRatedPage/>}/>
                                <Route path="/movies/actor" element={<ActorPage/>}/>
                            </Route>

                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>

                    </MoviesContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App/>);

