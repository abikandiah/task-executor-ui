import Footer from '@/components/Footer';
import { config } from '@/config';
import { UnderConstruction } from '@abumble/design-system/components/UnderConstruction';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';


interface MyRouterContext {
	queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: Root
});

function Root() {
	console.log(config);
	if (!config.constructionDisabled) {
		return (
			<div className="flex flex-col h-full">
				<div className='flex flex-grow justify-center'>
					<UnderConstruction />
				</div>

				<Footer />
			</div>
		)
	}

	return (
		<div className="flex flex-col h-full">

			<main className="w-full mt-10 px-3">
				<Outlet />
			</main>

			<Footer />
		</div>
	)
}