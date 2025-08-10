// pages/property/[id].tsx

import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail"; // Import the PropertyDetail component

export default function PropertyPage() {
  // useRouter hook to access the router object, including query parameters
  const router = useRouter();
  // Destructure 'id' from router.query. This 'id' corresponds to the dynamic part of the URL.
  const { id } = router.query;

  // Find the property in the sample data that matches the 'id' from the URL.
  // We're using 'name' as the identifier for now, as per the instruction's sample code.
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  // If no property is found for the given ID, display a "not found" message.
  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-medium text-gray-700">Property not found</p>
      </div>
    );
  }

  // Render the PropertyDetail component, passing the found property data as a prop.
  // The PropertyDetail component will be responsible for rendering all the details.
  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyDetail property={property} />
    </div>
  );
}
