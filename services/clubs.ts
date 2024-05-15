"use server";
import { db } from "@/lib/db";
import { LISTINGS_BATCH } from "@/utils/constants";
import { getCurrentUser } from "./user";
import { revalidatePath } from "next/cache";

export const getClubs = async (args?: Record<string, string>) => {
  try {
    const { userId, cursor } = args || {};

    if (!userId) {
      throw new Error("Unauthorized");
    }
    const filterQuery: any = {
      where: {
        userId,
      },
      take: LISTINGS_BATCH,
      orderBy: { createdAt: "desc" },
    };

    if (cursor) {
      filterQuery.cursor = { id: cursor };
      filterQuery.skip = 1;
    }

    const clubs = await db.listing.findMany({
      ...filterQuery,
    });

    const nextCursor =
      clubs.length === LISTINGS_BATCH
        ? clubs[LISTINGS_BATCH - 1].id
        : null;

    return {
      listings: clubs,
      nextCursor,
    };
  } catch (error: any) {
    return {
      listings: [],
      nextCursor: null,
    };
  }
};

export const deleteClubs = async (listingId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("Unauthorized");
    }

    if (!listingId || typeof listingId !== "string") {
      throw new Error("Invalid ID");
    }

    await db.listing.deleteMany({
      where: {
        id: listingId,
        userId: currentUser.id,
      },
    });

    revalidatePath("/");
    revalidatePath("/reservation");
    revalidatePath("/activities");
    revalidatePath("/favorites");
    revalidatePath("/clubs");
    revalidatePath(`/listings/${listingId}`);

    return "success";
  } catch (error) {
    throw new Error("Failed to delete the club!");
  }
};
