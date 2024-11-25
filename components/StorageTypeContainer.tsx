import StorageTypeSummary from "@/components/StorageTypeSummary";

const StorageTypeContainer = (fileObject: object) => {
    return (
      <div className="w-1/2">
        {/* Main container with no height constraint */}
        <div className="flex flex-col bg-gray-100 rounded-lg gap-4">
          {/* Bottom section with 2x2 grid */}
          <div className="h-96 bg-gray-100 rounded-lg">
            <div className="h-full flex flex-wrap">
              <StorageTypeSummary />
              <StorageTypeSummary />
              <StorageTypeSummary />
              <StorageTypeSummary />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StorageTypeContainer;