// import { RoutesType } from '@navigation/navigators/routes'
// import React, { Children, createContext, useCallback, useContext, useState } from 'react'

// interface IRouteContext {
// 	routes: RoutesType
// 	initRoutes: (appRoutes: RoutesType) => void
// }

// const RouteContext = createContext<IRouteContext | null>(null)

// const RouteProvider = () => {
// 	const [routes, setRoutes] = useState<RoutesType|null>(null)

// 	const initRoutes = useCallback((appRoutes: any) => {
// 		setRoutes(appRoutes)
// 	}, [])
// 	return <RouteContext.Provider value={{ routes, initRoutes }}>{Children}</RouteContext.Provider>
// }
// export default RouteProvider

// export const useRoutes = () => useContext(RouteContext)?.routes
// export const useAppRoutes = () => useContext(RouteContext)?.initRoutes

// // const useRoutes = (appRoutes?: any) => {
// // 	const [routes, setRoutes] = useState({})

// // 	const initRoutes = useCallback(() => {
// // 		setRoutes(appRoutes)
// // 	}, [])

// // 	useEffect(() => {}, [])
// // }

// // export default useRoutes

export {}
