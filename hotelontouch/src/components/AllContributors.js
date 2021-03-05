import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AllContributors = () => {
  const baseUrl =
    "https://api.github.com/repos/ayan-biswas0412/gssoc2021-HotelOnTouch/contributors";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(baseUrl)
        .then((data) => data.json())
        .then((data) => data);
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
      <SectionTitle>Contributors</SectionTitle>
      <ContributorWrapper>
        {data?.map(({ avatar_url, login, html_url }) => {
          return (
            <>
              <CardWrapper>
                <Image src={avatar_url} alt={login} />
                <ContributorInfo>
                  <Link href={html_url} target="_blank" rel="noreferrer">
                    <UserName>{login}</UserName>
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                      width="20px"
                      alt="github icon"
                    />
                  </Link>
                </ContributorInfo>
              </CardWrapper>
            </>
          );
        })}
      </ContributorWrapper>
    </Wrapper>
  );
};

export default AllContributors;

const SectionTitle = styled.h2`
  text-align: center;
`;

const Wrapper = styled.section`
  width: 73%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  margin-top: 60px;
`;
const ContributorWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  /* text-align: center; */
`;

const CardWrapper = styled.div`
  min-width: 168px;
  flex: 1;
  max-width: 175px;
  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
const Image = styled.img`
  width: 100%;
  -webkit-filter: grayscale(100%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: grayscale(0%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
    filter: grayscale(0%);
  }
`;

const ContributorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: lightblue;
  width: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: black;
  text-decoration: none !important;
`;

const UserName = styled.div`
  font-weight: 600;
`;
