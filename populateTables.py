#!/usr/bin/python
# -*- coding: utf-8 -*-

#from sqlalchemy.dialects.postgresql import psycopg2
import psycopg2
import sys
import threading


class OrganizationTable:

    @staticmethod
    def init():
        con = None

        #try:
        con = psycopg2.connect(host = 'ec2-174-129-21-42.compute-1.amazonaws.com', dbname='d6hqepbjcve3lg', user='mhzflwstvryxcd', password='Ph8uMGcobOdXttWlDPI_60t_w0')    
            
        cur = con.cursor()
        cur.execute("DROP TABLE orgs")
        
          
        cur.execute("CREATE TABLE orgs(orgName VARCHAR(100), tag VARCHAR(50), upVotes INT, downVotes INT)")
        cur.execute("INSERT INTO orgs VALUES('Independent Animal Rescue,Inc.','animals', 15, 5)")
        cur.execute("INSERT INTO orgs VALUES('African American Dance Ensemble','arts and culture', 20, 5)")
        cur.execute("INSERT INTO orgs VALUES('Adolescent Parenting Program','children and youth', 30, 1)")
        cur.execute("INSERT INTO orgs VALUES('Catholic Charities','community building', 10, 10)")
        cur.execute("INSERT INTO orgs VALUES('Justice Matters','crime and legal',15, 5)")
        cur.execute("INSERT INTO orgs VALUES('NC Rescue','disaster relief', 1000,1)")
        cur.execute("INSERT INTO orgs VALUES('Strong Couples, Strong Children','domestic violence',23, 10)")
        cur.execute("INSERT INTO orgs VALUES('Durham Literacy','education',21 , 4)")
        cur.execute("INSERT INTO orgs VALUES('NC Tree Lovers','environmentalism', 30, 14)")
        cur.execute("INSERT INTO orgs VALUES('Asbury Temple United Methodist Church','food and nutrition',21, 4)")
        cur.execute("INSERT INTO orgs VALUES('Samartian Health Center','health',20, 6)")
        cur.execute("INSERT INTO orgs VALUES('Durham Cares','homelessness',10, 4)")
        cur.execute("INSERT INTO orgs VALUES('Uganda Knitting','international',7, 7)")
        cur.execute("INSERT INTO orgs VALUES('Triumph','mental health',4, 4)")
        cur.execute("INSERT INTO orgs VALUES('Employment Security Commission','poverty', 5, 3)")

            
        


        cur.execute("CREATE TABLE tasksByOrg (orgName VARCHAR(50), task VARCHAR(100), currentFunding INT, goalFunding INT, dateAdded DATE)") #imageURL
        cur.execute("INSERT INTO tasksByOrg VALUES('Independent Animal Rescue', 'Provide the full cost of veterinery care for a litter of kittens', 312, 500, TO_DATE('4/15/2014','MM/DD/YYYY'))")   
        cur.execute("INSERT INTO tasksByOrg VALUES('Independent Animal Rescue', 'Purchase five additional leashes for dogs in house', 4, 20, TO_DATE('4/15/2014','MM/DD/YYYY'))")   
        cur.execute("INSERT INTO tasksByOrg VALUES('African American Dance Ensemble', 'Rent five new costumes for upcoming Fall Showcase, Dancing through the Ages', 71, 75, TO_DATE('4/15/2014','MM/DD/YYYY'))") 
        cur.execute("INSERT INTO tasksByOrg VALUES('Adolescent Parenting Program', 'Purchase SAT Textbooks for parents of high schoolers', 30, 100, TO_DATE('4/15/2014','MM/DD/YYYY'))") 
        cur.execute("INSERT INTO tasksByOrg VALUES('Catholic Charities', 'Hire four independent food venders for Harvest Festival on July 30 ', 114, 175, TO_DATE('4/15/2014','MM/DD/YYYY'))") 
        cur.execute("INSERT INTO tasksByOrg VALUES('Justice Matters', 'Pamphlet the City with Crime Awareness for Youth', 6, 25, TO_DATE('4/15/2014','MM/DD/YYYY'))") 
        cur.execute("INSERT INTO tasksByOrg VALUES('NC Rescue', 'Provide food and first aid supplies to families in Durham County affected by Hurricane Sandra', 375, 425, TO_DATE('4/15/2014','MM/DD/YYYY'))") 
        cur.execute("INSERT INTO tasksByOrg VALUES('Strong Couples, Strong Children', 'Hire an additional counselor for the month of April to match high demand for counseling', 320, 600, TO_DATE('4/15/2014','MM/DD/YYYY'))") 

        con.commit()
        #except psycopg2.DatabaseError, e:
            
        #    if con:
        #        con.rollback()
            
        #    print 'Error %s' % e    
         #   sys.exit(1)
            
            
        #finally:
            
        if con:
            con.close()

    @staticmethod        
    def matchInterest(interest):
        con = psycopg2.connect(host = 'ec2-174-129-21-42.compute-1.amazonaws.com', dbname='d6hqepbjcve3lg', user='mhzflwstvryxcd', password='Ph8uMGcobOdXttWlDPI_60t_w0')    
            
        cur = con.cursor()
        if len(min(interest)) == 1:
            cur.execute("SELECT orgName FROM orgs where tag = \'" + str(interest) + "\'")
        else:
            cur.execute("SELECT orgName FROM orgs where tag in " + str(interest))
        res = tuple(cur.fetchall())
        
        finalSearch = "("
        for r in res:
            if finalSearch != "(":
                finalSearch = finalSearch + ", "
            finalSearch = finalSearch + "\'" + r[0] +"\'"  
        finalSearch = finalSearch + ")"
        

        print "SELECT (orgName, task, currentFunding, goalFunding) FROM tasksByOrg where orgName in " + finalSearch
        cur.execute("SELECT (orgName, task, currentFunding, goalFunding) FROM tasksByOrg where orgName in " + finalSearch)
        res2 = cur.fetchall()

        if con:
            con.close()

        return res2


   