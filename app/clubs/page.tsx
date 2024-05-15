import React, { Suspense } from "react";

import EmptyState from "@/components/EmptyState";
import Heading from "@/components/Heading";
import ListingCard from "@/components/ListingCard";
import LoadMore from "@/components/LoadMore";

import { getCurrentUser } from "@/services/user";
import { getClubs } from "@/services/clubs";
import { getFavorites } from "@/services/favorite";

const ClubsPage = async () => {
  const user = await getCurrentUser();
  const favorites = await getFavorites();

  if (!user) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const { listings, nextCursor } = await getClubs({ userId: user.id });

  if (!listings || listings.length === 0) {
    return (
      <EmptyState
        title="No club found"
        subtitle="Looks like you have no clubs."
      />
    );
  }

  return (
    <section className="main-container">
      <Heading title="Clubs" subtitle="List of your clubs" backBtn/>
      <div className=" mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {listings.map((listing) => {
          const hasFavorited = favorites.includes(listing.id);
          return (
            <ListingCard
              key={listing.id}
              data={listing}
              hasFavorited={hasFavorited}
            />
          );
        })}
        {nextCursor ? (
          <Suspense fallback={<></>}>
            <LoadMore
              nextCursor={nextCursor}
              fnArgs={{ userId: user.id }}
              queryFn={getClubs}
              queryKey={["clubs", user.id]}
              favorites={favorites}
            />
          </Suspense>
        ) : null}
      </div>
    </section>
  );
};

export default ClubsPage;
