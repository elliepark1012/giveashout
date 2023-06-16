Volunteer.create(
    title: "Youth Pride support",
    date: "Jun 24, 2023, 12:00 PM - Jun 24, 2023, 6:00 PM EDT",
    location: "Domino Park in Brooklyn 15 River St, Brooklyn, NY 11249",
    about: "NYC Pride is proud to host Youth Pride, the annual celebration of and for LGBTQIA+ and ally teens. An afternoon of music, fashion, dancing, and more for LGBTQIA+ and Ally Teens.",
    img_url: "https://www.flourishaustralia.org.au/sites/default/files/styles/teaser_360x200/public/2023-05/pride_month.png?h=125a58ae&itok=0KdFNPQa"
)

Volunteer.create(
    title: "Painting at the park",
    date: "Jun 27, 2023, 10:00 AM - Jun 27, 2023, 1:00 PM EDT",
    location: "St. Nicholas Park, NY St. Nicholas Ave., St. Nicholas Ter. bet. W. 128 St. and W. 141 St. , Manhattan",
    about: "Pitch in and paint and generally take care of our city's great and vast park system. Groups and individuals are welcome at volunteer events across the city.",
    img_url: "https://d6osdab9etm5d.cloudfront.net/client_data/apple.benevity.org/files/imagecache/wpg_300x225/userfile-646fd6be4596d8.41794791.png"
)

Volunteer.create(
    title: "Juneteenth Music Festival",
    date: "Jun 16, 2023, 12:00 PM - Jun 18, 2023, 9:00 PM EDT",
    location: "Five Points Neighborhood 2736 Welton St, Denver, CO 80205",
    about: "We are going to support the Juneteenth Music Festival in the Historic Five Points Neighborhood in Denver, CO. It is one of the nation's largest Juneteenth celebrations; celebrated with a parade, live performances, art, vendors and fun for the entire family. Don't miss the interactive and educational programming at acclaimed African American cultural institutions and landmarks. ",
    img_url: "https://d6osdab9etm5d.cloudfront.net/client_data/apple.benevity.org/files/imagecache/wpg_1080x250/userfile-6467bccaf24733.68938195.jpg"
)

Volunteer.create(
    title: "Created Woman + Moody Center Concerts",
    date: "Jun 25, 2023, 1:00 PM - Jun 27, 2023, 1:00 PM EDT",
    location: "Moody Center 2001 Robert Dedman Dr, Austin, TX 78712",
    about: "Volunteers will work in the food and beverage stations at the Moody Center. As a volunteer you will monitor the self-checkout lines, help customers as needed, stock and organize beverages, and check ID's for alcohol purchase. Shifts are estimated to last 5-6 hours.In return, a portion of the sales will be donated back to our non-profit. This is an amazing opportunity for us to serve our community and fundraise for the women we serve.",
    img_url: "https://d6osdab9etm5d.cloudfront.net/client_data/apple.benevity.org/files/imagecache/wpg_1080x250/userfile-643da767172d26.46428700.png"
)

Volunteer.create(
    title: "Documentary Film Camp",
    date: "Jun 26, 2023, 9:30 AM - Jun 30, 2023, 3:00 PM EDT",
    location: "2479 Peachtree Rd NE, Atlanta, GA 30305",
    about: "Documentary Film Camp is chance for young people to learn Writing, Producing, Directing, Lighting, and Sound.  On camp days you will be a mentor and guide as youth particpate in various events. Each day of camp is from 9:30am - 3:00pm.  If you are unable to particapte for the full day arrgamgngets can be made to support indivudal activities.",
    img_url: "https://d6osdab9etm5d.cloudfront.net/client_data/apple.benevity.org/files/imagecache/wpg_1080x250/userfile-64806b703dae21.27390428.png"
)

User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password_disgest:Faker::Internet.password)
User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password_disgest:Faker::Internet.password)
User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password_disgest:Faker::Internet.password)
User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password_disgest:Faker::Internet.password)
User.create(username: Faker::Name.first_name, email: Faker::Internet.email, password_disgest:Faker::Internet.password)

Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 1)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 1)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 2)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 2)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 3)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 3)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 4)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 4)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 5)
Contact.create(name: Faker::Name.name, email: Faker::Internet.email, volunteer_id: 5)

Signup.create(user_id: 1, volunteer_id: 4, price: 1)
Signup.create(user_id: 2, volunteer_id: 3, price: 1)
Signup.create(user_id: 2, volunteer_id: 2, price: 1)
Signup.create(user_id: 3, volunteer_id: 5, price: 1)
Signup.create(user_id: 4, volunteer_id: 1, price: 1)
Signup.create(user_id: 4, volunteer_id: 3, price: 1)
