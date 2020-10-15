import React from "react";
import Layout from "../components/Layout";
import listStyles from "../styles/list";
import Filters from "../shared/filter/filter";
import { eventTime, concertData } from "../data/data";
import Link from "next/link";
import { useRouter } from 'next/router'
// there is no use of this code ,we will delete it in upcoming release.
const Schedule = () => {
    const router = useRouter()

    const onClickConcert = (id) => {
        router.push({ href: "/details/[id]", as: `/details/${id}` })
    }

    return (
        <Layout>
            <div>
                <Filters />
            </div>
            <div>
                {eventTime.map((item, index) => {
                    return (
                        <div>
                            {index + 1}
                            {"    "}
                            {item.date}
                            <div>
                                {item.concert.map((concert) => {
                                    return (
                                        <div>
                                            <Link href="/details/[id]" as={`/details/${concert._id}`}>
                                                <div>
                                                    {concert.name}
                                                    {concert.city}
                                                    {concert.state}
                                                    {concert.price}
                                                    {concert.type}
                                                </div>
                                            </Link>
                                            {"////////////"}
                                        </div>
                                    )
                                })}
                            </div>
                            {"///////////////////////////////"}
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
        .people {
          padding: 1rem;
        }

        .people .list h3 {
          line-height: 1em;
          padding: 0.5em 0;
        }
      `}</style>
            <style jsx>{listStyles}</style>
        </Layout >
    );
};

export default Schedule;
