import './App.css';
import {ThemeProvider} from "react-jss";
import {useSelector} from "react-redux";
import theme from "./theme"
import {BrowserRouter, Switch} from "react-router-dom";
import routes from "./routes";


function App() {
    const themeSetted = useSelector(state => state.theme.theme)

    return (
        <BrowserRouter>
            <div>
                <ThemeProvider theme={() => theme(themeSetted)}>
                    <Switch>
                        {routes.map(({component: RouteComponent, ...rest}, index) => (
                            <RouteComponent
                                {...rest}
                                key={index}
                            />
                        ))}
                    </Switch>
                </ThemeProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
