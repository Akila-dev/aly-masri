import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		const location = useLocation();
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />
					{idName === 'contact' && (
						<div className="copyright">
							<p className="p-text">@2024 Aly Masri</p>
							<p className="p-text">All rights reserved</p>
						</div>
					)}
				</div>
				{location.pathname === '/' ? (
					<NavigationDots active={idName} />
				) : (
					<div className="app__navigation" />
				)}
			</div>
		);
	};

export default AppWrap;
