import React from 'react';

const Biography: React.FC = () => {
  const exhibitions = [
    {
      year: '2025',
      title: 'Contemplations',
      venue: 'Modern Art Gallery, New York',
      type: 'Solo Exhibition'
    },
    {
      year: '2023',
      title: 'Contemporary Voices',
      venue: 'Metropolitan Museum, Chicago',
      type: 'Group Exhibition'
    },
    {
      year: '2023',
      title: 'Light and Shadow',
      venue: 'Thatchers Studio Gallery',
      type: 'Solo Exhibition'
    },
    {
      year: '2022',
      title: 'Emerging Artists',
      venue: 'Whitney Biennial',
      type: 'Group Exhibition'
    }
  ];

  const achievements = [
    'MFA in Fine Arts, Yale School of Art (2018)',
    'BFA in Painting, Rhode Island School of Design (2016)',
    'Artist Residency, Vermont Studio Center (2019)',
    'Recipient, National Arts Foundation Grant (2021)',
    'Featured Artist, Art in America Magazine (2023)'
  ];

  return (
    <main className="min-h-screen w-full py-section px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-light tracking-wide mb-6">
            Biography
          </h1>
          <p className="text-xl text-muted-foreground">
            The artistic journey of Elizabeth Thatchers
          </p>
        </div>

        {/* Main Biography */}
        <div className="space-y-12">
          <section className="prose prose-lg max-w-none">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Elizabeth Thatchers is a contemporary artist whose work transcends traditional 
                boundaries between portraiture, landscape, and abstract expression. Born in 1992 
                in Vermont, she developed an early fascination with the interplay of light and 
                shadow that would later define her artistic vision.
              </p>
              
              <p className="text-muted-foreground">
                Her artistic practice is rooted in a deep appreciation for the monochromatic 
                palette, believing that the absence of color allows viewers to focus on the 
                essential emotional content of each piece. This philosophy emerged during her 
                graduate studies at Yale, where she began developing the distinctive style that 
                characterizes her current body of work.
              </p>
              
              <p className="text-muted-foreground">
                Thatchers' portraits capture moments of quiet introspection, revealing the 
                complex inner lives of her subjects through careful attention to gesture and 
                expression. Her landscape work draws inspiration from the natural beauty of her 
                Vermont upbringing, while her abstract compositions explore the tension between 
                control and spontaneity in the creative process.
              </p>
              
              <p className="text-muted-foreground">
                Currently working from her studio in Brooklyn, Thatchers continues to push the 
                boundaries of traditional techniques while maintaining a deep respect for 
                classical artistic principles. Her work has been featured in numerous exhibitions 
                across the United States and is held in private collections internationally.
              </p>
            </div>
          </section>

          {/* Education & Achievements */}
          <section className="border-t border-border pt-12">
            <h2 className="font-heading text-3xl font-light tracking-wide mb-8">
              Education & Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0" />
                  <p className="text-muted-foreground text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Exhibitions */}
          <section className="border-t border-border pt-12">
            <h2 className="font-heading text-3xl font-light tracking-wide mb-8">
              Recent Exhibitions
            </h2>
            <div className="space-y-8">
              {exhibitions.map((exhibition, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-light mb-2">
                        {exhibition.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {exhibition.venue}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm text-muted-foreground">
                        {exhibition.type}
                      </p>
                      <p className="font-medium">{exhibition.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Artist Statement */}
          <section className="border-t border-border pt-12">
            <h2 className="font-heading text-3xl font-light tracking-wide mb-8">
              Artist Statement
            </h2>
            <div className="bg-gallery-light-gray p-8 space-y-6">
              <p className="text-lg italic leading-relaxed text-muted-foreground">
                "My work is an ongoing exploration of the spaces between—between light and dark, 
                between representation and abstraction, between the internal and external worlds 
                we inhabit. I am drawn to the power of limitation, finding that the constraint 
                of a monochromatic palette paradoxically opens infinite possibilities for 
                expression."
              </p>
              
              <p className="text-lg italic leading-relaxed text-muted-foreground">
                "Each piece begins with a moment of recognition—a quality of light, an expression, 
                a form that speaks to something universal yet deeply personal. Through the process 
                of creation, I seek to distill these moments into their essential emotional truth, 
                inviting viewers into a space of contemplation and discovery."
              </p>
              
              <div className="text-right mt-8">
                <p className="font-heading text-lg">— Elizabeth Thatchers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Biography;