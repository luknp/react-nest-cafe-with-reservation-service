import * as React from 'react';
import PageContentWrapper from '../PageContentWrapper/PageContentWrapper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../Header';
import { MobileNav } from '../MobileNav/MobileNavScroll';
import HomeSection from '../sections/HomeSection/HomeSection';
import ProductsSection from '../sections/ProductsSection/ProductsSection';
import GallerySection from '../sections/GallerySection/GallerySection';
import BottomSection from '../sections/BottomSection/BottomSection';
import LocationSection from '../sections/LocationSection/LocationSection';
import ContactSection from '../sections/ContactSection/ContactSection';
import { useAppContext } from '../../context/AppContext';

export const App: React.FC<any> = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const openClass = isMobileMenuOpen ? 'st-menu-open' : '';
    const [appState, dispatch] = useAppContext();

    const toggleMobileMenu = () => {
        dispatch({ actionType: 'INC', payload: { ...appState, counter: appState.counter + 1 } }); // dd forfun
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isMobileMenuOpen && event.target === event.currentTarget) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <Router>
            <div id={'st-container'} className={openClass}>
                <div className={'st-pusher'} onClick={closeMobileMenu}>
                    <MobileNav
                        open={isMobileMenuOpen}
                        closeMobileMenu={closeMobileMenu}
                    />
                    <PageContentWrapper>
                        <Switch>
                            <Route path='/'>
                                <Header
                                    toggleMobileMenu={toggleMobileMenu}
                                    isMobileMenuOpen={isMobileMenuOpen}
                                />
                                <HomeSection />
                                <ProductsSection />
                                <GallerySection />
                                <LocationSection />
                                <ContactSection />
                                <BottomSection />
                            </Route>
                        </Switch>
                    </PageContentWrapper>
                    {/* Footer */}
                </div>
            </div>
        </Router>

    );
};

export default App;
