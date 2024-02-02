import AddStoreFeature from './features/AddStoreFeatures';
import StoresDetailsFeature from './features/StoresDetailsFeature';

function StoresPage() {
    return (
        <>
            <AddStoreFeature />
            <div className="divider my-2 w-1/4 collapse-open mx-auto"></div>
            <StoresDetailsFeature />
        </>
    );
}

export default StoresPage;
